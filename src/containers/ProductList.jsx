import React from "react";
import '@styles/ProductList.scss';
import Product from "@components/Product";
import useGetProducts from "../hooks/useGetProducts"


const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API)

  return (
  <section className="ProductList">
      
        {products.map((product) => 
          (<Product product={product} key={product.id} />)
        )}
      
  </section>
  );
};

export default ProductList;
