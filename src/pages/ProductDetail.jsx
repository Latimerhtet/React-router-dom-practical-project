import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PRODUCTS } from "../data";
const ProductDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const findProductIndex = PRODUCTS.findIndex(
    (product) => product.id == params.id
  );
  const product = PRODUCTS[findProductIndex];
  const gobackProducts = () => {
    navigate("/products");
  };
  return (
    <div className="productDetail">
      <div className="sub-productDetail">
        <img src={product.productImage} />
        <div className="productDescription">
          <h2>{product.productName}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            maiores architecto beatae dignissimos vitae error, maxime aspernatur
            quasi quo vero nisi vel tempore voluptate sint sapiente illum
            reprehenderit quas laborum.
          </p>
          <p className="price">$ {product.price}</p>
          <button onClick={gobackProducts}>Back to Products</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
