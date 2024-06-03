import React from "react";
import { PRODUCTS } from "../data";
import Product from "../components/Product";
const Products = () => {
  return (
    <div className="products-main">
      <h2>Our Products</h2>
      <div className="products-flexbox">
        {PRODUCTS.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
