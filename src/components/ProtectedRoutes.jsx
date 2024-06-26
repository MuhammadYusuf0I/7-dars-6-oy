import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/signup"></Navigate>;
  }
}

export default ProtectedRoutes;
