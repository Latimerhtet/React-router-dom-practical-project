import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  let errText = "The page that you are trying to access is not found";
  if (error.status === 500) {
    errText = error.data.message;
  }
  const gobackHome = () => {
    navigate("/products");
  };
  return (
    <div className="error">
      <h3>{errText}</h3>
      <button onClick={gobackHome}>Go back</button>
    </div>
  );
};

export default Error;
