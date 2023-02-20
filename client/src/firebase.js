import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB8VGQPwO5onib3_MOtHlRCGW8MGOAjNCw",
  authDomain: "video-d6c44.firebaseapp.com",
  projectId: "video-d6c44",
  storageBucket: "video-d6c44.appspot.com",
  messagingSenderId: "419366709889",
  appId: "1:419366709889:web:bbcb6dfa8ac242c339fb80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const provider=new GoogleAuthProvider();

export default app;