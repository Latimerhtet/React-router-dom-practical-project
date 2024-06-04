import React from "react";
import { json, useLoaderData, useNavigate, useParams } from "react-router-dom";
const ProductDetail = () => {
  const navigate = useNavigate();
  const product = useLoaderData();

  // const findProductIndex = PRODUCTS.findIndex(
  //   (product) => product.id == params.id
  // );
  // const product = PRODUCTS[findProductIndex];
  const gobackProducts = () => {
    navigate("/products");
  };
  return (
    <div className="productDetail">
      <div className="sub-productDetail">
        <img src={product.image} />
        <div className="productDescription">
          <div className="titleAndDescription">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>

          <p className="price">$ {product.price}</p>
          <button onClick={gobackProducts}>Back to Products</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

export const loader = async ({ request, params }) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  if (!response.ok) {
    throw json({ message: "The item is not found" }, { status: 500 });
  } else {
    const product = await response.json();
    return product;
  }
};
