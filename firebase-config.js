// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "web-project-b368a.firebaseapp.com",
  projectId: "web-project-b368a",
  storageBucket: "web-project-b368a.appspot.com",
  messagingSenderId: "71946927548",
  appId: "1:71946927548:web:b80261e2cd6bafb9bdbfb9",
  measurementId: "G-9SP8ZKYXZL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
