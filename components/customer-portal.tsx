import { httpsCallable, HttpsCallableResult } from 'firebase/functions';
import { fns } from '../lib/firebase';

const CustomerPortal = () => {
  const openCustomerPortal = async () => {
    const callable = httpsCallable(
      fns,
      'ext-firestore-stripe-payments-createPortalLink'
    );
    const { data } = (await callable({
      returnUrl: window.location.origin,
    })) as HttpsCallableResult<{
      url: string;
    }>;

    window.location.assign(data.url);
  };

  return (
    <div>
      <button onClick={openCustomerPortal}>支払い方法の管理</button>
    </div>
  );
};

export default CustomerPortal;
