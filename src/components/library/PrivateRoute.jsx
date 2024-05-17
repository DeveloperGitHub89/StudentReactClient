import { Navigate, Outlet} from "react-router-dom";
import { getToken } from "../../services/AdminService";
import { BASE_ROUTE } from "../../constants/AppRoute";

export function PrivateRoute(props) {
    const token = getToken();
    console.log("token",token);
    if (token) {
        return <Outlet/>;
    }
    else {
        return <Navigate to={BASE_ROUTE}/>;
    }
}