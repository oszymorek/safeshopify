import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAFQ0u3eHAetp-6J-X3_bw_mIG7Dgn9VeQ',
  authDomain: 'saveshopifyv2.firebaseapp.com',
  projectId: 'saveshopifyv2',
  storageBucket: 'saveshopifyv2.appspot.com',
  messagingSenderId: '542612919128',
  appId: '1:542612919128:web:f9e73d6ec35d0472a3cb2d',
  measurementId: 'G-PVT7DNYDFB',
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
