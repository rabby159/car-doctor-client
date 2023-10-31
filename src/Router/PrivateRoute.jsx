import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {users, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if(users?.email){
        return children;
    }

    return (
        <div>
            <Navigate to='/login' replace></Navigate>
        </div>
    );
};

export default PrivateRoute;