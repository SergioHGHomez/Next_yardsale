import React, { useContext } from "react";
import "@styles/Product.scss";
import AppContext from "../context/AppContext";
import addIcon from '@icons/bt_add_to_cart.svg'

const Product = ({product}) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item)
  }

  return (
    <div className="product">
      {/*  cards  */}
      <div className="product_card">
        <img
          className="Product_img"
          src={product.category.image}
          alt={product.title}
        />
        <div className="Product_info">
          <div className="cards-cantainer_text">
            <p className="Product_price">${product.price}</p>
            <p className="Product_name">{product.title}</p>
          </div>
          <figure onClick={() => handleClick(product)} className="Product_add">
            <img src={addIcon} alt="add" />
          </figure>
        </div>
      </div>
      {/* end cards */}
    </div>
  );
};

export default Product;
