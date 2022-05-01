import CryptoNotes from "../../components/CryptoNotes";

import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { Container } from "react-bootstrap";

const CryptoNotesPage = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <Container>
      <h1 className="p-5" align="center">
        Заметки
      </h1>
      <CryptoNotes />
    </Container>
  ) : (
    <Navigate to="/login" />
  );
};

export default CryptoNotesPage;
