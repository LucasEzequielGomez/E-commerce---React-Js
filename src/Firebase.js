import { initalizeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCq0uvsdm5Wokb-v4G2UVJIAFhxAWqRjEw",
    authDomain: "ecommerce-coder-dcc69.firebaseapp.com",
    projectId: "ecommerce-coder-dcc69",
    storageBucket: "ecommerce-coder-dcc69.appspot.com",
    messagingSenderId: "1009365251359",
    appId: "1:1009365251359:web:a71acb5925175e56d3ec2a"
  };

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore()