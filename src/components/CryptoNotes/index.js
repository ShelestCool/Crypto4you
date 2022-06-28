import React, {useState, useEffect} from "react";

import {collection, addDoc, onSnapshot, deleteDoc, doc, setDoc} from "firebase/firestore";
import {db} from "../../firebase.js"

import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomTable from "../CustomTable/CustomTable";

import "./cryptoNotes.css";

const initialValues = {
  cryptoName: "",
  cryptoPrice: "",
  cryptoAmount: "",
};

function CryptoNotes() {
  const [userData, setUserData] = useState(initialValues);
  const [notes, setNotes] = useState([]);
  const [editableUserData, setEditableUserData] = useState({
    isEdit: false,
    userIndex: null,
  });

  useEffect( () => {
    onSnapshot(collection(db, "user-note"), (snapshot) => {
      setNotes(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()
      })))
    })
  }, []);

  const saveChange = async () => {
    await addDoc(collection(db, "user-note"),{
      name: userData.cryptoName,
      price: userData.cryptoPrice,
      amount: userData.cryptoAmount,
    }).then(function(res){
      alert("Note added!")
    });
  }

  const handleRemoveClick = async (id) => {
    // setNotes(notes.filter((note, userIndex) => userIndex !== index));
    const docRef = doc(db, "user-note", id);
    await deleteDoc(docRef);
  };

  const handleCleanClick = () => {
    setUserData(initialValues);
    setEditableUserData({
      isEdit: false,
      userIndex: null,
    });
  };

  // const handleRemoveClick = ({ index }) => {
  //   setNotes(notes.filter((note, userIndex) => userIndex !== index));
  // };

  const isFilledFields =
    userData.cryptoName && userData.cryptoPrice && userData.cryptoAmount;

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (isFilledFields) {
      if (editableUserData.isEdit) {
        const editedData = notes;
        editedData.splice(editableUserData.userIndex, 1, userData);

        setNotes(editedData);

        setEditableUserData({
          isEdit: false,
          userIndex: null,
        });
      } else {
        setNotes((prevState) => [...prevState, userData]);
      }

      setUserData(initialValues);
    }
  };

  // const handleEditClick = async ({ note, index }) => {
  //   setUserData(note);
  //   setEditableUserData({
  //     isEdit: true,
  //     userIndex: index,
  //   });
  // };

  const handleEditClick = async (id) => {
    // setUserData(note);
    // setEditableUserData({
    //   isEdit: true,
    //   userIndex: index,
    // });

    const playload = {};

    const docRef = doc(db, "user-note", id);
    setDoc(docRef, playload);
  };

  const handleInputChange = (e, cryptoName) =>
    setUserData((prevState) => ({
      ...prevState,
      [cryptoName]: e.target.value,
    }));

  return (
    <div>
        <form
          onSubmit={handleSubmitUser}
          onReset={handleCleanClick}
          className="formNotes"
        >
          <CustomSelect
            placeholder="select"
            handleChange={handleInputChange}
            value={userData.cryptoName}
            fieldName="cryptoName"
          />

          <CustomInput
            placeholder="Price"
            handleChange={handleInputChange}
            value={userData.cryptoPrice}
            fieldName="cryptoPrice"
          />

          <CustomInput
            placeholder="Amount"
            handleChange={handleInputChange}
            value={userData.cryptoAmount}
            fieldName="cryptoAmount"
          />

          <CustomButton
            label="Очистить"
            classNames=""
            handleClick={() => {}}
            data={null}
            type="reset"
          />

          <CustomButton
            label={editableUserData.isEdit ? "Изменить" : "Добавить"}
            // label={"Добавить"}
            classNames=""
            handleClick={saveChange}
            data={null}
            type="submit"
            // disabled={!isFilledFields}
          />
        </form>

        <div>
          <CustomTable
            notes={notes}
            handleEditClick={handleEditClick}
            handleRemoveClick={handleRemoveClick}
          />
        </div>
    </div>
  );
}

export default CryptoNotes;
