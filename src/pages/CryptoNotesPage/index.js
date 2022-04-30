import CryptoNotes from "../../components/CryptoNotes";

import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

const CryptoNotesPage = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <div>
      <CryptoNotes />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default CryptoNotesPage;
