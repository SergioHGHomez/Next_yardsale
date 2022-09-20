import React from 'react';
import styles from '@styles/Checkout.module.scss';
import CartInfo from '@containers/CartInfo';
import PayInfo from '@components/PayInfo';

const Checkout = () => {
    return (
        <section className={styles.checkout}>
            
            <CartInfo />
            <PayInfo />
        </section>
    );
    
}


export default Checkout;