import React from 'react';
import Header from '@components/Header';
import ProductList from '@containers/ProductList';
import ProductDetail from '@containers/ProductDetail';
import Layaout from '@containers/Layout';

const Home = () => {
  return (
    <Layaout>
      <Header />
      <ProductList />
      <ProductDetail />
    </Layaout>
  );
};

export default Home;
