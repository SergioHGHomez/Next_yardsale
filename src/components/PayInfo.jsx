import React from 'react';

const PayInfo = () => {
  return (
    <form>
      <h3>email</h3>
      <input type="text" id="email" aria-label="email" placeholder="1234 1234 1234 1234" />
      <h3>card information</h3>
      <input type="text" id="card-number" aria-label="card number" />
      <input type="text" id="card-expiration-date" aria-label="card expiration date" />
      <input type="text" id="card-cvc" aria-label="card cvc number" />
      <h3>name on card</h3>
      <input type="text" />
      <h3>contry or region</h3>
      <input type="text" />
      <button>pay</button>
    </form>
  );
};

export default PayInfo;
