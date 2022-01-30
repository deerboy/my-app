import { httpsCallable } from 'firebase/functions';
import React from 'react';
import { fns } from '../lib/firebase';

const ProductList = () => {
  const startCheckout = async () => {
    const callable = httpsCallable(fns, 'createCheckoutSession');
    const { data } = await callable();
    window.location.assign(data as string);
  };

  return (
    <div>
      <h2>チケット</h2>
      <p>1500円</p>
      <button onClick={startCheckout}>購入</button>
    </div>
  );
};

export default ProductList;
