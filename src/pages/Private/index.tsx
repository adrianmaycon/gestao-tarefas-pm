import { AuthContext } from "contexts/Auth/AuthContext";
import { useContext } from "react";

export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <h2>Meu Painel</h2>

            Olá {auth.user?.name}, tudo bem?
        </div>
    );
}