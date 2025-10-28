import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import fbaseAuth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [pageIsLoading, setPageIsLoading] = useState(true);

  const doCreateUserWithEmailAndPassword = (email, password) => {
    setPageIsLoading(true);
    return createUserWithEmailAndPassword(fbaseAuth, email, password);
  };

  const doSendEmailVerification = () => {
    return sendEmailVerification(fbaseAuth.currentUser);
  };

  const doUpdateProfile = (displayName, photoURL) => {
    // console.log(displayName, photoURL);
    return updateProfile(fbaseAuth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const doSignInWithEmailAndPassword = (vMail, vPass) => {
    setPageIsLoading(true);
    return signInWithEmailAndPassword(fbaseAuth, vMail, vPass);
  };

  const doSignInGoogleWithPopup = () => {
    // setPageIsLoading(true);
    return signInWithPopup(fbaseAuth, googleProvider);
  };

  const doSignInGitHubWithPopup = () => {
    // setPageIsLoading(true);
    return signInWithPopup(fbaseAuth, githubProvider);
  };

  const doSendPasswordResetEmail = (email) => {
    // setPageIsLoading(true);
    return sendPasswordResetEmail(fbaseAuth, email);
  };

  const doSignOut = () => {
    setPageIsLoading(true);
    return signOut(fbaseAuth);
  };

  const authData = {
    loggedInUser,
    setLoggedInUser,

    doCreateUserWithEmailAndPassword,
    doSendEmailVerification,
    doUpdateProfile,
    doSignOut,

    doSignInWithEmailAndPassword,
    doSignInGoogleWithPopup,
    doSignInGitHubWithPopup,
    doSendPasswordResetEmail,

    pageIsLoading,
    setPageIsLoading,
  };

  // saving auth info between page loads..
  useEffect(() => {
    //adding a listner..
    const unsubscribe = onAuthStateChanged(fbaseAuth, (savedUser) => {
      // console.log(savedUser);
      setLoggedInUser(savedUser);
      setPageIsLoading(false);
    });
    // cleaning up the listener..
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;