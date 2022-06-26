import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCWf5mO0kXFj2HTYz5YJ19PBgXDBSvt-tQ",
  authDomain: "backendtinanails.firebaseapp.com",
  projectId: "backendtinanails",
  storageBucket: "backendtinanails.appspot.com",
  messagingSenderId: "637845745210",
  appId: "1:637845745210:web:4f8cea5540707f18008f03"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)