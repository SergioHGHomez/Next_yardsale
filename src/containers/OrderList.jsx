import React, { useContext } from 'react';
import Link from 'next/link';
import Order from '@components/Order';
import AppContex from '../context/AppContext';
import styles from '@styles/OrderList.module.scss';

const OrderList = () => {
  const { state } = useContext(AppContex);
  const date = new Date();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  
  const sumTotal = () => {
    const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum.toFixed(2);
  };

  return (
    <section className={styles.orderList}>
      <div className={styles['orderList-list']}>
        <h1 className={styles['orderList-list_h1']}>My orderList</h1>
        <div className={styles['orderList-list_info']}>
          <div>
            <p className={styles['info_date']}>
              {day}.{month}.{year}
            </p>
            <p className={styles['info_articles']}>{state.cart.length} Awesome products!!!</p>
          </div>
          <p className={styles['info_total']}>$ {sumTotal()}</p>
        </div>
        <Link href={'/checkout'}>
          <button className={styles['orderList-checkout_button']}>check out</button>
        </Link>
        <ul className={styles['orderList_products']}>
          {state.cart.map((item) => (
            <Order product={item} key={`product-${item.id}`} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OrderList;
