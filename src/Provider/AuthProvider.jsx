import { useState } from "react";
import { createContext } from "react";


const AuthContext = createContext();

const AuthProvider = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState({});


    const AuthInfo = {
        users,
        loading
    }



    return (
        <AuthContext.Provider value={AuthInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;