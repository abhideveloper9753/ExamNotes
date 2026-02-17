
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2lrHhME6bo1BvQmvkcFzf1WpzvaM8P58",
  authDomain: "authexamnotes-fb004.firebaseapp.com",
  projectId: "authexamnotes-fb004",
  storageBucket: "authexamnotes-fb004.firebasestorage.app",
  messagingSenderId: "1013512716595",
  appId: "1:1013512716595:web:1c85e1e7efaca5fcc3fe46",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
