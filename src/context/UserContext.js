import React, { createContext, useEffect, useState } from 'react'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();


const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user inside state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unSubscribe();
    },[])

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {user, loading, createUser, signIn, logOut, googleSignIn}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default UserContext