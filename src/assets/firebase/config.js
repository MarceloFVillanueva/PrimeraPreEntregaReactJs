import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAVc0LKuldMYzeJj6Lcl0_7093KuTk6RVY",
  authDomain: "peliculasdealquiler.firebaseapp.com",
  projectId: "peliculasdealquiler",
  storageBucket: "peliculasdealquiler.appspot.com",
  messagingSenderId: "757642481762",
  appId: "1:757642481762:web:5ea52315601c42d717413b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initlizeFirebase = () => app