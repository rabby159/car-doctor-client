import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    };


    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const handleUpdateProfile = (name, imageURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imageURL
        })
    };

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }



    useEffect(()=> {
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUsers(currentUser);
            setLoading(false);
        });
        return () =>{
            return unSubscribe();
        }
    }, [])


    const AuthInfo = {
        users,
        loading,
        createUser,
        signInUser,
        handleUpdateProfile,
        signOutUser
    }



    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;