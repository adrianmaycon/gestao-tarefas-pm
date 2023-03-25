import { AuthContext } from "contexts/Auth/AuthContext";
import { ChangeEvent, useContext, useState, FormEvent  } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container } from './styles';
import { FaAddressCard } from "react-icons/fa";
export const Register = () => {
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
                setTimeout(() => document.location.reload(), 300);
            } else {
                alert("Não deu certo.")
            }
        }
    }

    return (
        <Container>
            <div className="row">
                <div className="box-icon-register">
                    <FaAddressCard className="icon-register" />
                </div>

                <h2>Cadastre-se</h2>
            </div>

            <form className="card-form" onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input 
                    required
                    type="name" 
                    placeholder="Digite seu nome" 
                    />

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
                    placeholder="Escolha sua senha" 
                    />
                
                <button type="submit">Cadastrar</button>
            </form>

            <p>Já tem cadastro? <Link to="/login">Faça seu login!</Link></p>
        </Container>
    );
}