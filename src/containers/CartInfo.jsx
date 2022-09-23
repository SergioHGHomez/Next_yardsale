import React from 'react';
import CartItem from '@components/CartItem';
import styles from '@styles/CartInfo.module.scss';

const CartInfo = () => {
  return (
    <article className={styles.cartInfo}>
      <h2 className={styles['cartInfo_title']}>Product description</h2>
      <p className={styles['cartInfo_text']}>TOTAL</p>
      <p className={styles['cartInfo_total']}>$0.00</p>
      <h3 className={styles['cartInfo_text']}>list of products</h3>
      <ul className={styles['cartInfo_list']}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
    </article>
  );
};

export default CartInfo;
