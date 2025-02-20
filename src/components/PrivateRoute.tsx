import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Authentication/useAuth";

const PrivateRoute = () => {
    const user = useAuth();
    
    if (!user?.authToken) {
        return <Navigate to="/log" replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;
