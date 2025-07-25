import { Navigate, useLocation } from "react-router-dom";
import useUser from "../authentication/useUser";
import Spinner from "./Spinner";

function ProtectRoutes({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const location = useLocation();

  if (isLoading) return <Spinner />;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

export default ProtectRoutes;
