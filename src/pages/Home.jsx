import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="center">
      <div className="container">
        <h1>Find the best products in our store!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt
          aperiam rerum qui excepturi consequatur, laboriosam porro corporis sed
          ad necessitatibus nobis optio voluptatum est! Dolores ipsam
          exercitationem assumenda obcaecati?
        </p>
        <button onClick={() => navigate("/products")} className="exploreBtn">
          Explore our products
        </button>
      </div>
    </div>
  );
};

export default Home;
