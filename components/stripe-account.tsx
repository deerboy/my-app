import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import React, { useEffect, useState } from 'react';
import { db, fns } from '../lib/firebase';

type StripeAccount = {
  stripeAccountId: string;
  valid: boolean;
};

type Props = {
  user: User;
};

const StripeAccount = ({ user }: Props) => {
  const [stripeAccount, setStripeAccount] = useState<StripeAccount | null>(
    null
  );

  useEffect(() => {
    getStripeAccount().then((account) => setStripeAccount(account));
  }, []);

  const getStripeAccount = async () => {
    const ref = doc(db, `stripeAccounts/${user.uid}`);
    const snap = await getDoc(ref);
    return snap.data() as StripeAccount;
  };

  const createStripeAccount = async () => {
    const callable = httpsCallable(fns, 'createStripeAccount');
    try {
      await callable();
      setStripeAccount(await getStripeAccount());
    } catch (error) {
      alert('販売アカウントの作成に失敗しました');
    }
  };

  return (
    <div>
      {!stripeAccount && (
        <div>
          <button onClick={createStripeAccount}>販売をはじめる</button>
        </div>
      )}
      {stripeAccount && (
        <p>ConnectアカウントID: {stripeAccount.stripeAccountId}</p>
      )}
      {!stripeAccount?.valid && <button>販売者情報を登録してください</button>}
    </div>
  );
};

export default StripeAccount;
