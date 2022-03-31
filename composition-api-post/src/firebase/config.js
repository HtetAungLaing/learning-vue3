// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCDwGtme7qk_KnZ8XxZlwJzxhCDgtW0v4A",
    authDomain: "vue-blog-b13fe.firebaseapp.com",
    projectId: "vue-blog-b13fe",
    storageBucket: "vue-blog-b13fe.appspot.com",
    messagingSenderId: "1003763291321",
    appId: "1:1003763291321:web:6ba04ca4ad7c680fa8f768"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection } from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyCDwGtme7qk_KnZ8XxZlwJzxhCDgtW0v4A",
//     authDomain: "vue-blog-b13fe.firebaseapp.com",
//     projectId: "vue-blog-b13fe",
//     storageBucket: "vue-blog-b13fe.appspot.com",
//     messagingSenderId: "1003763291321",
//     appId: "1:1003763291321:web:6ba04ca4ad7c680fa8f768"
// };

// Initialize Firebase
// let app = initializeApp(firebaseConfig);
// let db = getFirestore(app);
// export { db };