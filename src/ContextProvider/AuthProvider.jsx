import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { FacebookAuthProvider } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
export const AuthContext= createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]= useState({})


    const createUser=(email,password)=>{
      return   createUserWithEmailAndPassword(auth,email,password)
    }

    const signedIn= (email,password)=>{
        return  signInWithEmailAndPassword(auth,email,password)


    }
    const handleFbLogin= ()=>{
        return signInWithPopup(auth,fbProvider)
    }
    const handleGoogleLogin=()=>{
      return  signInWithPopup(auth,googleProvider)
    }

    const handleSignOut=()=>{
      return  signOut(auth)
    }

    const handleUpdateProfile=(name,profile)=> updateProfile(auth.currentUser, {
        displayName: name, photoURL: profile
      })







    useEffect(()=>{
        const unSubscribe=   onAuthStateChanged(auth,currentUser=>{
              console.log('user in the auth state changed',currentUser);
              setUser(currentUser);
            
          });
         return ()=>{
          unSubscribe();
         }
      
         },[])


    


   
    const authInfo= {
        createUser,
        signedIn,
        handleUpdateProfile,
        handleFbLogin,
        handleGoogleLogin,
        user,
        handleSignOut

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            
         {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;