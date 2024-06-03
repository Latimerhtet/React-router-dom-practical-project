import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const gobackHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h3>The page that you are trying to access is not found</h3>
      <button onClick={gobackHome}>Go back</button>
    </div>
  );
};

export default Error;
