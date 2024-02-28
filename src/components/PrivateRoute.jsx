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
        <div style ={{display: "flex"}}>
    {children ? children : <Outlet/>}
</div>
      );
}