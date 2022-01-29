import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const app = initializeApp({
  apiKey: 'AIzaSyDhtbeoKNb8edPfhsVw15tpmpYH8fAhDZA',
  authDomain: 'mini-app-ab758.firebaseapp.com',
  projectId: 'mini-app-ab758',
  storageBucket: 'mini-app-ab758.appspot.com',
  messagingSenderId: '46999316230',
  appId: '1:46999316230:web:9ac501473b5033bff1e087',
  measurementId: 'G-V6BT68N1D0',
});

export const db = getFirestore(app);
export const auth = getAuth(app);
export const fns = getFunctions(app, 'asia-northeast1');
