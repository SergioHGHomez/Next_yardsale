import React from 'react';
import CartItem from '@components/CartItem';
import styles from '@styles/CartInfo.module.scss';
import { useContext } from 'react';
import AppContext from '@context/AppContext';

const CartInfo = () => {
  const {state} = useContext(AppContext);

  const reducer = (acumulator, currentValue) => acumulator + currentValue.price;

  const sumTotal = () => {
    const sum = state.cart.reduce(reducer, 0);
    return sum.toFixed(2);
  };

  

  return (  
    <article className={styles.cartInfo}>
      <h2 className={styles['cartInfo_title']}>Product description</h2>
      <p className={styles['cartInfo_text']}>TOTAL</p>
      <p className={styles['cartInfo_total']}>{sumTotal()}</p>
      <h3 className={styles['cartInfo_text']}>list of products</h3>
      <ul className={styles['cartInfo_list']}>
        {state.cart.map((item) => (
          <CartItem product={item} key={item.id}/>
        ))}
      </ul>
    </article>
  );
};

export default CartInfo;
