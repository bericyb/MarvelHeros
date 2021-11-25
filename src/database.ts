import { initializeApp } from "firebase/app";
import { ref, get, getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCS1MHcfEuaLKB70aRUoFyrTRXoVpdM7Yc",
  authDomain: "apollo-30dbb.firebaseapp.com",
  databaseURL: "https://apollo-30dbb-default-rtdb.firebaseio.com",
  projectId: "apollo-30dbb",
  storageBucket: "apollo-30dbb.appspot.com",
  messagingSenderId: "576732495631",
  appId: "1:576732495631:web:e933642612d96010ac887a",
};

const firebaseClient = initializeApp(firebaseConfig);

const db = getDatabase();

export default db;
