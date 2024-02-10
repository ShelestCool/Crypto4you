import React, {useState, useEffect} from "react";

import {collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy, where} from "firebase/firestore";
import {db, auth} from "../../firebase.js"
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
  const [noteData, setNoteData] = useState(initialValues);
  const [notes, setNotes] = useState([]);
  const [editableNoteData, setEditableNoteData] = useState({
    isEdit: false,
    noteId: null
  });

  const isFilledFields = noteData.cryptoName && noteData.cryptoPrice && noteData.cryptoAmount;

  const currentUser = auth.currentUser;
  const userId = currentUser ? currentUser.uid : null;

  useEffect( () => {
    const collectionRef = collection(db, "user-note");
    const q = query(collectionRef, where("userId", "==", userId), orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q , (snapshot) => 
    setNotes(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
  );
    return unsub;
  }, [userId]);

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (isFilledFields) {
      if (editableNoteData.isEdit){       
        const updatedNotes = [...notes];
        updatedNotes.splice(editableNoteData.noteId, 1, noteData);
        setNotes(updatedNotes);

        const docRef = doc(db, "user-note", notes[editableNoteData.noteId].id);
        updateDoc(docRef, noteData);

        setEditableNoteData({
          isEdit: false,
          noteId: null
        });
      } else {

        addDoc(collection(db, "user-note"), {
          userId: userId,
          ...noteData,
          timestamp: serverTimestamp(),
        });
      }

      setNoteData(initialValues);
    }
  };

  const handleEditClick = (note, id) => {
    setNoteData(note);
    setEditableNoteData({
      isEdit: true,
      noteId: id
    });

    window.scrollTo({
      top: 100,
      behavior: "smooth"
  });
  };

  const handleRemoveClick = async (id) => {
    const docRef = doc(db, "user-note", id);
    await deleteDoc(docRef);
  };

  const handleCleanClick = () => {
    setNoteData(initialValues);
  };

  const handleInputChange = (e, cryptoName) =>
    setNoteData((prevState) => ({
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
            value={noteData.cryptoName}
            fieldName="cryptoName"
          />

          <CustomInput
            placeholder="Price"
            handleChange={handleInputChange}
            value={noteData.cryptoPrice}
            fieldName="cryptoPrice"
          />

          <CustomInput
            placeholder="Amount"
            handleChange={handleInputChange}
            value={noteData.cryptoAmount}
            fieldName="cryptoAmount"
          />

          <CustomButton
            label="Очистить"
            classNames=""
            handleClick={() => {}}
            type="reset"
          />

          <CustomButton
            label={editableNoteData.isEdit ? "Изменить" : "Добавить"}
            classNames=""
            type="submit"
            handleClick={handleSubmitUser}
            disabled={!isFilledFields}
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
