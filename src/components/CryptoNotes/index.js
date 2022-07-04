import React, {useState, useEffect} from "react";

import {collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy} from "firebase/firestore";
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
  const [noteData, setNoteData] = useState(initialValues);
  const [notes, setNotes] = useState([]);
  const [editableNoteData, setEditableNoteData] = useState({
    isEdit: false,
    noteId: null
  });

  const isFilledFields =
  noteData.cryptoName && noteData.cryptoPrice && noteData.cryptoAmount;

  useEffect( () => {
    const collectionRef = collection(db, "user-note");
    const q = query(collectionRef, orderBy("timestamp", "desc"))

    const unsub = onSnapshot(q , (snapshot) => 
    setNotes(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
  );
    return unsub;
  }, []);

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (isFilledFields) {
      if (editableNoteData.isEdit){       
        const editedData = notes;
        editedData.splice(editableNoteData.noteId, 1, noteData);

        setNotes(editedData);

        const docRef = doc(db, "user-note", editableNoteData.noteId);
        updateDoc(docRef, ...editedData);

        setEditableNoteData({
          isEdit: false,
          noteId: null
        });
      } else {

        addDoc(collection(db, "user-note"),{
          cryptoName: noteData.cryptoName,
          cryptoPrice: noteData.cryptoPrice,
          cryptoAmount: noteData.cryptoAmount,
          timestamp: serverTimestamp(),
        })

        setNotes((prevState) => [...prevState, noteData]);
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
            handleClick={() => {}}
            type="submit"
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
