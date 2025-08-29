import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectRole, selectToken } from "./authSlice";

const PublicRoute = ({ children, role }) => {
  const token = useSelector(selectToken);
  const currentRole = useSelector(selectRole);

  // If user already logged in, redirect to their dashboard
  if (token) {
    return <Navigate to={`/dashboard/${currentRole}`} replace />;
  }

  // Otherwise, show login page
  return children;
};

export default PublicRoute;
