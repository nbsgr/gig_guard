import React from "react";
import { Navigate } from "react-router-dom";
import { getSession } from "../api/api";

const ProtectedRoute = ({ children }) => {

  const token = getSession("token");

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render children
  return children;
};

export default ProtectedRoute;