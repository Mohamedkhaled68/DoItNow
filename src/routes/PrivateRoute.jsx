import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  if (user) {
    return <>{children}</>;
  }
};

export default PrivateRoute;
