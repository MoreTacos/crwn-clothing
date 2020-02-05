import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAr1GDmSDDzeLd3eYUwU6DSXl0cPlfhUVk',
  authDomain: 'crwn-db-6957a.firebaseapp.com',
  databaseURL: 'https://crwn-db-6957a.firebaseio.com',
  projectId: 'crwn-db-6957a',
  storageBucket: 'crwn-db-6957a.appspot.com',
  messagingSenderId: '346856439231',
  appId: '1:346856439231:web:330f075cb193265b70750a',
  measurementId: 'G-N15RN6H678'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
