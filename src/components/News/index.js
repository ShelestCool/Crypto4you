import React, { useState, useEffect } from "react";
import { Container, Card, Modal, Form } from "react-bootstrap";
import { useAuth, db } from "../../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  ref as storageRef,
} from "firebase/storage";

import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";

import "./style.css";
import CustomArea from "../CustomArea/CustomArea";

function AddNews() {
  const user = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState({
    id: null,
    title: "",
    image: "",
    description: "",
  });
  const [newPost, setNewPost] = useState({
    title: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const PostsCollection = collection(db, "crypto-news");
      const querySnapshot = await getDocs(PostsCollection);
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const storageReference = storageRef(getStorage(), `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageReference, file);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Обработка состояния загрузки
      },
      (error) => {
        console.error(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setNewPost({ ...newPost, image: downloadURL });
        } catch (error) {
          console.error("Error getting download URL:", error);
        }
      }
    );
  };

  const addPost = async () => {
    const docRef = await addDoc(collection(db, "crypto-news"), newPost);
    setPosts([...posts, { ...newPost, id: docRef.id }]);
    closeModal();
  };

  const savePost = async () => {
    await updateDoc(doc(db, "crypto-news", editedPost.id), editedPost);
    const updatedPosts = posts.map((post) =>
      post.id === editedPost.id ? editedPost : post
    );
    setPosts(updatedPosts);
    closeModal();
  };

  const deletePost = async (postId) => {
    await deleteDoc(doc(db, "crypto-news", postId));
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const openEditModal = (post) => {
    setIsEditing(true);
    setEditedPost(post);
    setShowModal(true);
  };

  const openAddModal = () => {
    setIsEditing(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditedPost({ id: null, title: "", image: "", description: "" });
    setNewPost({ title: "", image: "", description: "" });
    setIsEditing(false);
  };

  return (
    <Container>
      <div className="news">
        <div>
          <div>
            {user && user.isAdmin && (
              <div>
                <div className="adminText">
                  <p>Вы администратор</p>
                </div>
                <div className="adminButton">
                  <CustomButton
                    label="Добавить новость"
                    width="170px"
                    fontSize="16px"
                    classNames=""
                    handleClick={openAddModal}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {isEditing ? "Редактирование новости" : "Добавить новость"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>Название</Form.Label>
                <CustomInput
                  placeholder="Введите название новости"
                  classNames="titleInput"
                  type="text"
                  width="100%"
                  height="40px"
                  value={isEditing ? editedPost.title : newPost.title}
                  handleChange={(e) =>
                    isEditing
                      ? setEditedPost({ ...editedPost, title: e.target.value })
                      : setNewPost({ ...newPost, title: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Изображение</Form.Label>
                <Form.Control
                  className="imgInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Описание</Form.Label>
                <CustomArea
                  name="description"
                  classNames="descArea"
                  rows="5"
                  placeholder="Введите описание поста"
                  handleChange={(e) =>
                    isEditing
                      ? setEditedPost({
                          ...editedPost,
                          description: e.target.value,
                        })
                      : setNewPost({ ...newPost, description: e.target.value })
                  }
                  value={
                    isEditing ? editedPost.description : newPost.description
                  }
                  width="100%"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <CustomButton
              color="gray"
              label="Закрыть"
              fontSize="16px"
              width="110px"
              height="40px"
              classNames=""
              handleClick={closeModal}
            />
            <CustomButton
              label={isEditing ? "Изменить" : "Добавить"}
              fontSize="16px"
              width="110px"
              height="40px"
              classNames=""
              handleClick={isEditing ? savePost : addPost}
            />
          </Modal.Footer>
        </Modal>

        {/* Вывод списка постов */}
        <div className="newsBlock">
          {posts.map((post) => (
            <Card key={post.id} className="postBlock">
              <Card.Img
                className="imgPost"
                variant="top"
                src={post.image}
                alt={post.title}
              />
              <Card.Body>
                <Card.Title className="titlePost">{post.title}</Card.Title>
                <Card.Text className="descriptionPost">
                  {post.description}
                </Card.Text>
              </Card.Body>
              {user && user.isAdmin && (
                <div className="editButtons">
                  <CustomButton
                    label="Редактировать"
                    width="95%"
                    fontSize="14px"
                    color="#8c8585"
                    classNames=""
                    handleClick={() => openEditModal(post)}
                  />
                  <CustomButton
                    width="95%"
                    fontSize="14px"
                    color="#ff5959"
                    label="Удалить"
                    classNames=""
                    handleClick={() => deletePost(post.id)}
                  />
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default AddNews;
