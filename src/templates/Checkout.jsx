import React from 'react';
import Head from 'next/head';
import styles from '@styles/Checkout.module.scss';
import CartInfo from '@containers/CartInfo';
import PayInfo from '@components/PayInfo';

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <section className={styles.checkout}>
        <CartInfo />
        <PayInfo />
      </section>
    </>
  );
};

export default Checkout;
