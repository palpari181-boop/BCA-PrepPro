import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRLAUUW6Jrwnd5px1xTYlB9moY8mD0jSA",
  authDomain: "bcahub-6dcec.firebaseapp.com",
  projectId: "bcahub-6dcec",
  storageBucket: "bcahub-6dcec.firebasestorage.app",
  messagingSenderId: "340110406093",
  appId: "1:340110406093:web:9f0777302801c6635d9484"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);