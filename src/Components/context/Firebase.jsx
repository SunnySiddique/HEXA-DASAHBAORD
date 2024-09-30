import { createContext, useContext, useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useFirebase = () => useContext(FirebaseContext);
const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCDLJxjptl1wOdsSGrCgkd89WfEw_ckPyg",
  authDomain: "hexa-dashboard-6716a.firebaseapp.com",
  projectId: "hexa-dashboard-6716a",
  storageBucket: "hexa-dashboard-6716a.appspot.com",
  messagingSenderId: "216272972688",
  appId: "1:216272972688:web:a4a13c397462ce75656115",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState();
  const [err, setErr] = useState();
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const SignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErr("Email is already in use.");
      } else if (error.code === "auth/weak-password") {
        setErr("Password should be at least 6 characters");
      } else {
        setErr("");
      }
      console.log(error);
    }
  };

  const LoginPages = async (email, password) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setErr("user not found");
      } else {
        // setErr("")
      }
    }
  };

  const SignOut = async () => {
    try {
      await signOut(firebaseAuth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleWithSign = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };

  useEffect(() => {
    const unscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unscribe();
    };
  }, []);

  const LoginIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        SignUp,
        LoginPages,
        SignOut,
        googleWithSign,
        user,
        LoginIn,
        err,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
