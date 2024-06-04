import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const showProduct = () => {
    navigate(`/productDetails/${product.id}`);
  };
  return (
    <Link to={`/productDetails/${product.id}`}>
      <div key={product.id} className="product">
        <img src={product.image} alt={product.title} />
        <div className="detail">
          <h4>{product.title}</h4>
          <div className="priceAnddetail">
            <p>$ {product.price}</p>
            <button onClick={showProduct} className="exploreBtn">
              Detail
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
