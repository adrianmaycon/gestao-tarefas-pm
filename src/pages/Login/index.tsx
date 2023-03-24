import { AuthContext } from "contexts/Auth/AuthContext";
import { ChangeEvent, useContext, useState, FormEvent  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserLock } from "react-icons/fa";
import { Container } from './styles';

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

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
    
        if (email && password) {
            const isLogged = await auth.signin(email, password);

            if (isLogged) {
                navigate('/dashboard');
            } else {
                alert("Não deu certo.")
            }
        }
    }

    return (
        <Container>
            <FaUserLock className="icon-login" />

            <h2>Login</h2>

            <form className="card-form" onSubmit={handleSubmit}>
                <label>E-mail:</label>
                <input 
                    required
                    type="email" 
                    value={email} 
                    onChange={handlerEmailInput}
                    placeholder="Digite seu e-mail" 
                    />

                <label>Senha:</label>
                <input 
                    required
                    type="password" 
                    value={password} 
                    onChange={handlerPasswordInput}
                    placeholder="Digite sua senha" 
                    />
                
                <button type="submit">Entrar</button>
            </form>

            <p>Não tem cadastro? <Link to="cadastro">Faça seu cadastro!</Link></p>
        </Container>
    );
}