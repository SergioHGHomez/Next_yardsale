import React, { useContext, useState } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addIcon from '@icons/bt_add_to_cart.svg';
import addedIcon from '@icons/bt_added_to_cart.svg';
import Aside_description from './Aside_description';
import styles from '@styles/Product.module.scss';


const Product = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const [showDescription, setShowDescription] = useState(false);

  const handleAdd = (item) => {

    if (added == false) {
      addToCart(item);
      setAdded(true);
    }

  };

  function handleCloseDescription(){
    setShowDescription(false);
  }

  const [added, setAdded] = useState(false);

  return (
    <>
      {showDescription && <Aside_description product={product} handleCloseDescription={handleCloseDescription} handleAdd={handleAdd} />}
      <div className={styles.product}>
        {/*  cards  */}
        <div className={styles['product_card']}>
          <div className={styles['product_img-warap']}>
            <Image className={styles['Product_img']} onClick={() => {
              setShowDescription(true);
            }} src={product.image} alt={product.name} width="100%" height="100%" layout="responsive" />
          </div>
          <div className={styles['Product_info']}>
            <div className={styles['cards-cantainer_text']}>
              <p className={styles['Product_name']}>{product.name}</p>
              <p className={styles['Product_price']}>${product.price}</p>
            </div>
            <figure onClick={() => handleAdd(product)} className={styles['Product_add']}>
              <Image className={styles['product_add-icon']} src={added ? addedIcon : addIcon} alt="add button" width="100%" height="100%" layout="responsive" />
            </figure>
          </div>
        </div>
        {/* end cards */}
      </div>

    </>
  );
};

export default Product;
