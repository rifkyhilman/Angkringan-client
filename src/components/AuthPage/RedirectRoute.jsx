import { Navigate } from "react-router-dom";
import { isAuthenticated } from "@/utils/auth";

const RedirectRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/dashboard" /> : children;
};

export default RedirectRoute;
