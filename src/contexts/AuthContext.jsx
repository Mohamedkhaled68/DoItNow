import { createContext, useEffect, useState } from "react";
import { auth, db } from "../utils/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Sign Up Function
  const signup = async (email, password, username) => {
    await createUserWithEmailAndPassword(auth, email, password);
    const currentUser = auth.currentUser;
    console.log(currentUser);
    console.log(typeof currentUser);
    await setDoc(doc(db, "users", currentUser.uid), {
      email: currentUser.email,
      id: currentUser.uid,
      // ...currentUser,
      displayName: username,
    });
  };

  const logout = () => {
    return signOut(auth);
  };

  //Check if there is user
  useEffect(() => {
    setLoading(true);
    const listener = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const data = await getDoc(userDocRef);
        setUser(data.data());
        setLoading(false);
      } else {
        setUser(null);
        console.log("logged out");
        setLoading(false);
      }
    });

    return () => listener();
  }, []);

  //values Obj
  const value = { user, login, signup, logout, loading };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
