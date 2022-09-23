import Checkout from '@templates/Checkout';
import Head from 'next/head';

const checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Checkout />
    </>
  );
};

export default checkout;
