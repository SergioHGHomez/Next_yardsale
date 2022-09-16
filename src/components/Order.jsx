import React, { useContext } from "react";
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
        <img
          className="order-list_img"
          src={product.images[0]}
          alt={product.title}
        />
        <p className="order-list_name">{product.title} </p>
      </div>
      <p className="order-list_price">$ {product.price}</p>
      <img 
          onClick={() => handleRemove(product)}
          className="order-closeIcon"
          src={closeIcon}></img>
    </div>
  );
};

export default Order;
