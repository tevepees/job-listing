import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({
    isAllowed,
    redirecTo="/",
    children,
}){
    if (!isAllowed) {
        return <Navigate to={redirecTo} />;
    }
    return (
        <div>
    {children ? children : <Outlet/>}
</div>
      );
}