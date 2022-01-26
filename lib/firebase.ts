import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const app = initializeApp({
  apiKey: 'AIzaSyB_QOP-ChZ0gUK1Tt_kOeMJbYxizJx7i_E',
  authDomain: 'tutorial-8a0b2.firebaseapp.com',
  projectId: 'tutorial-8a0b2',
  storageBucket: 'tutorial-8a0b2.appspot.com',
  messagingSenderId: '755921569678',
  appId: '1:755921569678:web:10cb0bedbeb5234ba306df',
});

export const db = getFirestore(app);
export const auth = getAuth(app);
export const fns = getFunctions(app, 'asia-northeast1');
