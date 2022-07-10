import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApNPAdfT8xwts56e2Y0dWMTTEMWx9tYno",
  authDomain: "wangwana-library-system.firebaseapp.com",
  projectId: "wangwana-library-system",
  storageBucket: "wangwana-library-system.appspot.com",
  messagingSenderId: "496476482552",
  appId: "1:496476482552:web:437128da2d663033ea040d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
