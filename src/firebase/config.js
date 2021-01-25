import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD6eXNVcauYQiyhDBlDO-gbW-doDG3JSVk',
  authDomain: 'hush-filmoteka-app.firebaseapp.com',
  projectId: 'hush-filmoteka-app',
  storageBucket: 'hush-filmoteka-app.appspot.com',
  messagingSenderId: '954269235587',
  appId: '1:954269235587:web:b05242e3c9027f09b61eb6',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
