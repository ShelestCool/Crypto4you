import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGV7Q7_ZtYi6aKwQj8XZjjzYV16kUqAYw",
  authDomain: "crypto4you-e9428.firebaseapp.com",
  databaseURL: "https://crypto4you-e9428-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crypto4you-e9428",
  storageBucket: "crypto4you-e9428.appspot.com",
  messagingSenderId: "80638994195",
  appId: "1:80638994195:web:d622c2378ff49b37169ce6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
