import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider =({children}) => {
    const [loading , setLoading] = useState(true);
    const [user , setUser] = useState(null);

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth , googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    
    const singUpWithPassword = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signInWithPassword = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);

    }

    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    } , [])

    const authInfo = {
        signInWithGoogle,
        user,
        setUser,
        loading,
        signOutUser,
        singUpWithPassword,
        signInWithPassword
    }
    return(
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;