import React, { useContext, useState } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addIcon from '@icons/bt_add_to_cart.svg';
import addedIcon from '@icons/bt_added_to_cart.svg';
import styles from '@styles/Product.module.scss';


const Product = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  
  const handleClick = (item) => {
    
    if (added == false){
      addToCart(item);
      setAdded(true);
    }
    
  };

  const [added, setAdded] = useState(false);

  return (
    <div className={styles.product}>
      {/*  cards  */}
      <div className={styles['product_card']}>
        <div className={styles['product_img-warap']}>
          <Image className={styles['Product_img']} src={product.image} alt={product.name} width="100%" height="100%" layout="responsive" />
        </div>
        <div className={styles['Product_info']}>
          <div className={styles['cards-cantainer_text']}>
            <p className={styles['Product_name']}>{product.name}</p>
            <p className={styles['Product_price']}>${product.price}</p>
          </div>
          <figure onClick={() => handleClick(product)} className={styles['Product_add']}>
            <Image className={styles['product_add-icon']} src={added ? addedIcon : addIcon} alt="add button" width="100%" height="100%" layout="responsive"  />
          </figure>
        </div>
      </div>
      {/* end cards */}
    </div>
  );
};

export default Product;
