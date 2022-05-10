import React, { useState } from "react";

import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomTable from "../CustomTable/CustomTable";

import "./cryptoNotes.css";

const initialValues = {
  cryptoName: "",
  cryptoPrice: "",
  cryptoAmount: "",
  cryptoRate: "",
};

function CryptoNotes() {
  const [userData, setUserData] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [editableUserData, setEditableUserData] = useState({
    isEdit: false,
    userIndex: null,
  });

  const handleRemoveClick = ({ index }) => {
    setUsers(users.filter((user, userIndex) => userIndex !== index));
  };

  const isFilledFields =
    userData.cryptoName &&
    userData.cryptoPrice &&
    userData.cryptoAmount &&
    userData.cryptoRate;

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (isFilledFields) {
      if (editableUserData.isEdit) {
        const editedData = users;
        editedData.splice(editableUserData.userIndex, 1, userData);

        setUsers(editedData);

        setEditableUserData({
          isEdit: false,
          userIndex: null,
        });
      } else {
        setUsers((prevState) => [...prevState, userData]);
      }

      setUserData(initialValues);
    }
  };

  const handleCleanClick = () => {
    setUserData(initialValues);
    setEditableUserData({
      isEdit: false,
      userIndex: null,
    });
  };

  const handleEditClick = ({ user, index }) => {
    setUserData(user);
    setEditableUserData({
      isEdit: true,
      userIndex: index,
    });
  };

  const handleInputChange = (e, cryptoName) =>
    setUserData((prevState) => ({
      ...prevState,
      [cryptoName]: e.target.value,
    }));

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="table-data">
          <CustomTable
            users={users}
            handleEditClick={handleEditClick}
            handleRemoveClick={handleRemoveClick}
          />
        </div>

        <div>
          <form onSubmit={handleSubmitUser} onReset={handleCleanClick}>
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

            <CustomInput
              placeholder="Rate"
              handleChange={handleInputChange}
              value={userData.cryptoRate}
              fieldName="cryptoRate"
            />

            <div className="buttons-wrapper">
              <CustomButton
                label="Очистить"
                classNames=""
                handleClick={() => {}}
                data={null}
                type="reset"
              />

              <CustomButton
                label={editableUserData.isEdit ? "Edit" : "Add"}
                classNames=""
                handleClick={() => {}}
                data={null}
                type="submit"
                disabled={!isFilledFields}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CryptoNotes;
