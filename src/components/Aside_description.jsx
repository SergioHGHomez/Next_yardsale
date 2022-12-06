import React from 'react';
import close_icon from 'assets/icons/icon_close.png';
import Image from 'next/image';
import styles from '../styles/Aside_description.module.scss';

const Aside_description = ({ product, handleCloseDescription, handleAdd }) => {
    return (
        <aside className={styles['aside-description']}>
            <div className={styles['aside-description_card']}>
                <figure>
                    <button onClick={() => {
                        handleCloseDescription();
                    }}>
                        <Image className={styles['aside-description_close-icon']} src={close_icon} alt="close icon" />
                    </button>

                    <img src={product.image} alt="camera" />
                </figure>
                <div className={styles["aside-description_info"]}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <button className={styles["aside-description_add-button"]}
                    onClick={() => {
                        console.log(product);
                        handleAdd(product);
                    }}
                    >add to cart</button>
                </div>
            </div>
        </aside>
    );
};

export default Aside_description;