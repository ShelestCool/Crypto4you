import CryptoNotes from "../../components/CryptoNotes";

import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { Container } from "react-bootstrap";

import "./CryptoNotesPage.css";

const CryptoNotesPage = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <Container className="mainNotesDiv">
      <div className="notesContent">
        <h1 className="p-5" align="center">
          Заметки
        </h1>
        <CryptoNotes />
      </div>
    </Container>
  ) : (
    <Navigate to="/login" />
  );
};

export default CryptoNotesPage;
