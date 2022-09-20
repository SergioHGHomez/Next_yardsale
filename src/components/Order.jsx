import React, { useContext } from "react";
import Image from "next/image";
import closeIcon from "@icons/icon_close.png";
import AppContext from "../context/AppContext";
import styles from "@styles/Order.module.scss";


const Order = ({ product }) => {
  const {removeToCart} = useContext(AppContext)

  const handleRemove = item => {

    removeToCart(item)
    

  }

  return (
    <div className={styles.order}>
      <div className="order_item">
        <Image
          className={styles["order-list_image"]}
          src={product.image}
          alt={product.name}
          width="100%"
          height="100%"
          layout="responsive"
        />
        <p className={styles["order-list_name"]}>{product.name} </p>
      </div>
      <p className={styles["order-list_price"]}>$ {product.price}</p>
      <Image 
          onClick={() => handleRemove(product)}
          className={styles["order-closeIcon"]}
          src={closeIcon}></Image>
    </div>
  );
};

export default Order;
