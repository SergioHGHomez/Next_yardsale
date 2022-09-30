import React from 'react';
import styles from '../styles/PayInfo.module.scss';
import useGetContries from '@hooks/useGetCountries';

const API = '/api/countries';

const PayInfo = () => {
  const contries = useGetContries(API);
  return (
    <form className={styles.payInfo}>
      <h2 className={styles['payInfo_Principal-title']}>Payment info</h2>
      <h3 className={styles['payInfo_title']}> email </h3>
      <input className={styles['payInfo_input']} type="text" id="email" aria-label="email" placeholder="1234 1234 1234 1234" />
      <h3 className={styles['payInfo_title']}> card information </h3>
      <input className={styles['payInfo_input']} type="text" id="card-number" aria-label="card number" />
      <input className={styles['payInfo_input']} type="text" id="card-expiration-date" aria-label="card expiration date" />
      <input className={styles['payInfo_input']} type="text" id="card-cvc" aria-label="card cvc number" />
      <h3 className={styles['payInfo_title']}> name on card </h3>
      <input className={styles['payInfo_input']} type="text" />
      <h3 className={styles['payInfo_title']}> contry or region </h3>
      <select className={styles['payInfo_select']}>
        <option>select</option>
        {contries.map(contrie => (<option key={contrie.code} value={contrie.code}>{contrie.name}</option>))}
      </select>
      <button className={styles['payInfo_button']} > pay </button>
    </form>
  );
};

export default PayInfo;
