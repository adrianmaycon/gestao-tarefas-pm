import { AuthContext } from "contexts/Auth/AuthContext";
import { Login } from "pages/Login";
import { useContext } from "react";

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const auth = useContext(AuthContext);

    if(!auth.user) {
        return <Login />;
    }

    return children;
}