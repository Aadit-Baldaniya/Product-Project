import React from "react";
import { Product, name } from "../data/data";
import ProductList from "./ProductList";
import styles from "./product.module.css";
import { CgMenuGridO } from "react-icons/cg";
function ProductMap() {
  return (
    <>
      <div className={styles.display}>
        <CgMenuGridO />
        All Product
        <ul className={styles.ul}>
          {Product.map((value, index) => {
            return <ProductList key={index} value={value} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default ProductMap;
