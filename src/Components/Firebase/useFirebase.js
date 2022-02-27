



import {getIdToken, signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";
import FirebaseInit from "./FirebaseInit";

FirebaseInit()


const useFirebase = () => {

    const [user, setUser] = useState({})
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [login, setLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const signInUsingGoogle = () => {
        setIsLoading(true)

        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    };



    //obserb user state change
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
               getIdToken(user)
            //    .then(idToken=>console.log(idToken))
            //    .then(idToken=>localStorage.setItem("idToken",idToken))
                
                setUser(user);
            } else {
                setUser({})
            }

            setIsLoading(false)
        });

    }, [auth])
    //This is Logout Option
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => { setIsLoading(false) })
    }
    // Registration method
    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("password must be at least 6 character")
        } else {
            setError("")
        }

        login ? processLogin(email, password) : createNewUser(email, password)
        setEmail("")
        setPassword("")

    }

    // Create a New User with Email and Password

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    //Login with Email and Password

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // Handle Email
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    //Handle Password
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    // Handle Check Option
    const toggleLogin = (e) => {
        setLogin(e.target.checked)
    }



    return {
        user,
        login,
        email,
        password,
        logOut,
        signInUsingGoogle,


        handleRegistration,
        handleEmail,
        handlePassword,
        toggleLogin,
        isLoading
    }
}

export default useFirebase;