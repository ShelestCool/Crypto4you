import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { auth, sendPasswordResetEmail } from '../../firebase';
import './PersonalAccount.css';
import CustomButton from '../CustomButton/CustomButton';

const PersonalAccount = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserInfo({
          email: user.email,
          createdAt: user.metadata.creationTime,
        });
      } else {
        setUserInfo(null);
      }
    });

    return unsubscribe;
  }, []);

  const handlePasswordReset = async () => {
    if (!userInfo) {
      alert('Информация о пользователе не загружена');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, userInfo.email);
      alert('Инструкция по смене пароля отправлена на вашу почту.');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container className="personal-account">
      {userInfo ? (
        <div className="account-info">
          <p><b>Почта:</b> {userInfo.email}</p>
          <p><b>Дата создания:</b> {userInfo.createdAt}</p>
        </div>
      ) : (
        <p>Загрузка информации о пользователе...</p>
      )}
      <div className="account-button">
        <CustomButton 
        handleClick={handlePasswordReset} 
        className="reset-button" 
        disabled={!userInfo}
        width='15%'
        fontSize='17px'
        label="Сбросить пароль"
        />
      </div>
    </Container>
  );
};

export default PersonalAccount;
