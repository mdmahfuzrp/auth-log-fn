import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectRole, selectToken } from "./authSlice";

const ProtectedRoute = ({ children, allowedRole }) => {
  const token = useSelector(selectToken);
  const role = useSelector(selectRole);

  // If no token or role mismatch → redirect to login
  if (!token || role !== allowedRole) {
    return <Navigate to={`/login/${allowedRole}`} replace />;
  }

  // User is authorized
  return children;
};

export default ProtectedRoute;
