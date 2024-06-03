import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, productName, productImage, price } = product;
  const navigate = useNavigate();
  const showProduct = () => {
    navigate(`/productDetails/${id}`);
  };
  return (
    <div key={id} className="product" onClick={showProduct}>
      <img src={productImage} alt={productName} />
      <div className="detail">
        <h4>{productName}</h4>
        <div className="priceAnddetail">
          <p>$ {price}</p>
          <button className="exploreBtn">Detail</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
