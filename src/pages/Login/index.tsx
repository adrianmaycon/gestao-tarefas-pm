import { AuthContext } from "contexts/Auth/AuthContext";
import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlerPasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handlelogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);

            if (isLogged) {
                navigate('/');
            } else {
                alert("Não deu certo.")
            }
        }
    }

    return (
        <div>
            <h2>Página Fechada</h2>

            <input 
                required
                type="text" 
                value={email} 
                onChange={handlerEmailInput}
                placeholder="Digite seu e-mail" 
            />
            <input 
                required
                type="password" 
                value={password} 
                onChange={handlerPasswordInput}
                placeholder="Digite sua senha" 
            />
            <button type="submit" onClick={handlelogin}>Logar</button>
        </div>
    );
}