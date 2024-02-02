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
  apiKey: "AIzaSyCHakoQBPpfGQ5rwxE06g6PUUWS4uuQQmI",
  authDomain: "hexa-project-c6c36.firebaseapp.com",
  projectId: "hexa-project-c6c36",
  storageBucket: "hexa-project-c6c36.appspot.com",
  messagingSenderId: "721056395034",
  appId: "1:721056395034:web:7f8fbdc4e56bb1f4d606a3",
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
    signInWithPopup(firebaseAuth, googleProvider)
  }

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
      value={{ SignUp, LoginPages, SignOut, googleWithSign, user, LoginIn, err }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
