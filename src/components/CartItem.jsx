import React from 'react';
import styles from 'styles/CartItem.module.scss';

const CartItem = () => {
  return (
    <li className={styles.cartItem}>
      <p className={styles['cartItem_name']}>name</p>
      <p className={styles['cartItem_price']}>price</p>
    </li>
  );
};

export default CartItem;
