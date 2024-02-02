import { Navigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";


const Protected = ({children}) => {
    const firebase = useFirebase();
    if(!firebase.user) {
        return <Navigate to="/" />
    }
    return children;
}

export default Protected
