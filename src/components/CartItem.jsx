import React from 'react';
import styles from 'styles/CartItem.module.scss';

const CartItem = ({product}) => {
  return (
    <li className={styles.cartItem}>
      <p className={styles['cartItem_name']}>{product.name}</p>
      <p className={styles['cartItem_price']}>{product.price}</p>
    </li>
  );
};

export default CartItem;
