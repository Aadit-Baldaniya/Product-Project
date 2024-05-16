import React from "react";
import { products } from "../data/data";
import ProductCart from "./ProductCart";

function Product() {
  return (
    <div className="grid gap-x-8 gap-y-4 grid-cols-4 m-auto p-4">
      {products.map((value) => {
        return <ProductCart key={value.id} product={value} />;
      })}
    </div>
  );
}

export default Product;
