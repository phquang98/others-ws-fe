import { FirebaseAuthProvider } from "react-admin-firebase";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.REACT_APP_API_KEY || "";
const authDomain = process.env.REACT_APP_AUTH_DOMAIN || "";
const projectId = process.env.REACT_APP_PROJECT_ID || "";
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET || "";
const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID || "";
const appId = process.env.REACT_APP_APP_ID || "";

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

const firebaseOpts = {};

const firebaseAuthProvider = FirebaseAuthProvider(firebaseConfig, firebaseOpts);

export { firebaseAuthProvider };
