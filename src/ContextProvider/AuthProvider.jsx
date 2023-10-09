import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { FacebookAuthProvider } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
export const AuthContext= createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]= useState({})
    const [loading,setLoading]= useState(true);

    const createUser=(email,password)=>{
      

      return   createUserWithEmailAndPassword(auth,email,password)

    }

    const signedIn= (email,password)=>{
        setLoading(true)
        return  signInWithEmailAndPassword(auth,email,password)


    }
    const handleFbLogin= ()=>{
      setLoading(true)
        return signInWithPopup(auth,fbProvider)
    }
    const handleGoogleLogin=()=>{
      setLoading(true)
      return  signInWithPopup(auth,googleProvider)
    }

    const handleSignOut=()=>{
      setLoading(true)
      return  signOut(auth)
    }

    const handleUpdateProfile=(name,profile)=> updateProfile(auth.currentUser, {
        displayName: name, photoURL: profile
      })







    useEffect(()=>{
        const unSubscribe=   onAuthStateChanged(auth,currentUser=>{
              console.log('user in the auth state changed',currentUser);
              setUser(currentUser);
              setLoading(false);
            
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
        handleSignOut,
        loading

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