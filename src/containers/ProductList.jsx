import React from 'react';
import styles from '@styles/ProductList.module.scss';
import Product from '@components/Product';
import useGetProducts from '@hooks/useGetProducts';

const API = '/api/products';

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className={styles.ProductList}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </section>
  );
};

export default ProductList;
