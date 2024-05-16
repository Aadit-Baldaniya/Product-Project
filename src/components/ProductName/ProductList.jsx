import React from "react";
import styles from "./product.module.css";
function ProductList({ value }) {
  return (
    <div>
      <div>
        <li className={styles.li}>{value}</li>
      </div>
    </div>
  );
}

export default ProductList;
