import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0PafgZ5KOBcpPZGCF4k67cf63K76eo2I",
    authDomain: "portfolio-47ba3.firebaseapp.com",
    projectId: "portfolio-47ba3",
    storageBucket: "portfolio-47ba3.appspot.com",
    messagingSenderId: "860014982921",
    appId: "1:860014982921:web:bb1a9abf43499c6f3d05d8",
    measurementId: "G-JHFESTBZ1P"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App db={db}/>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
