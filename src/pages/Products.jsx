import React from "react";
// import { PRODUCTS } from "../data";
import Product from "../components/Product";
import { json, useLoaderData } from "react-router-dom";
const Products = () => {
  const PRODUCTS = useLoaderData();
  return (
    <div className="products-main">
      <h2>Our Products</h2>
      <div className="products-flexbox">
        {PRODUCTS.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;

export const loader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw json({ message: "products can not be found!" }, { status: 500 });
  } else {
    const PRODUCTS = await response.json();
    console.log(PRODUCTS);
    return PRODUCTS;
  }
};
