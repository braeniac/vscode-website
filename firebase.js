import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'; 

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "personal-website-e7a0f.firebaseapp.com",
  projectId: "personal-website-e7a0f",
  storageBucket: "personal-website-e7a0f.appspot.com",
  messagingSenderId: "122708561731",
  appId: "1:122708561731:web:7c98167d73d5976fada9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 
export const storage = getStorage(app); 