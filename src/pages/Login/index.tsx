// import { AuthContext } from "contexts/Auth/AuthContext";
import { ChangeEvent, useState, FormEvent  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { Container } from './styles';

export const Login = () => {
    // const auth = useContext(AuthContext);
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

        toast.success("Login feito com sucesso!", { position: toast.POSITION.BOTTOM_LEFT })
        // toast.error("Usuário não cadastrado!", { position: toast.POSITION.BOTTOM_LEFT })

        navigate('/dashboard');
        // setTimeout(() => document.location.reload(), 300);

        // if (email && password) {
        //     const isLogged = await auth.signin(email, password);

        //     if (isLogged) {
        //         navigate('/dashboard');
        //     } else {
        //         alert("Não deu certo.")
        //     }
        // }
    }

    return (
        <Container>
            <div className="row">
                <div className="box-icon-login">
                    <FaUserLock className="icon-login" />
                </div>

                <h2>Fazer Login</h2>
            </div>


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

            <p>Não tem cadastro? <Link to="/cadastro">Faça seu cadastro!</Link></p>
        </Container>
    );
}