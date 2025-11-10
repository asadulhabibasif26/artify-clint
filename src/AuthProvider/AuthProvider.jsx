import React from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider =({children}) => {
    return(
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;