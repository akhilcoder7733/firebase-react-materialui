// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSScQethF_kSbq_3bjSelnv5gepByvru0",
  authDomain: "simple-project-fe3f0.firebaseapp.com",
  databaseURL: "https://simple-project-fe3f0-default-rtdb.firebaseio.com",
  projectId: "simple-project-fe3f0",
  storageBucket: "simple-project-fe3f0.appspot.com",
  messagingSenderId: "747676491702",
  appId: "1:747676491702:web:5bac704237c7f92341ab17",
  measurementId: "G-5RLRFY5DRN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const registerUser = createUserWithEmailAndPassword;
export const loginUser = signInWithEmailAndPassword; 
