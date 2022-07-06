import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ls from "localstorage-slim";
const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const user = ls.get("id");

  useEffect(() => {
    ls.flush();
  }, []);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return [children];
};
export default PrivateRoutes;
