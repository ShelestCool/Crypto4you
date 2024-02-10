import "./style.css";
import { Container } from "react-bootstrap";
import React from "react";
import { useAuth, logout } from "../../firebase"; // Импортируем useAuth и logout из вашего Firebase файла

function AddNews() {
    const user = useAuth();
    
  return (
    <Container>
      <div className="news">
          <div>
              {user ? (
                  <div>
                      <p>Здравствуйте, {user.email}!</p>
                      {user.isAdmin ? (
                          <div>
                              <p>Вы администратор</p>
                              {/* Здесь вы можете отображать компоненты и функции для администратора */}
                          </div>
                      ) : (
                          <p>Вы не администратор</p>
                          // Здесь вы можете отображать обычные компоненты и функции
                      )}
                      <button onClick={logout}>Выйти</button>
                  </div>
              ) : (
                  <p>Пользователь не вошел в систему</p>
              )}
          </div>
      </div>
    </Container>
  );
}

export default AddNews;
