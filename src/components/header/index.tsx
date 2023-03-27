import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useContext } from 'react';
import { Container } from "./styles";
import { FaRegUser, FaSignOutAlt, FaShapes } from "react-icons/fa";
import logoPmCe from 'assets/header/logoPmCe.svg';

export const Header = () => {
    const auth = useContext(AuthContext);
    const token = localStorage.getItem("tokenAutentication");

    console.log(token);

    const handlerLogout = async () => {
        localStorage.setItem("tokenAutentication", "");
        setTimeout(() => document.location.reload(), 300);
        await auth.signout();
    }

    return (
        <Container>
            <div className='box-container'>
                <Link to="/">
                    <img src={logoPmCe} alt='logo Pm Ce' />
                </Link>

                <nav>
                    {(auth.user || token) ? <Link className='btn-link' to="/dashboard"><FaShapes className='icon-login'/>Meu Painel</Link> : null}
                    {(auth.user || token) ? <Link className='btn-link' onClick={handlerLogout} to="/" style={{backgroundColor: "#912a2a", border: 'none'}}><FaSignOutAlt className='icon-login'/> Sair</Link> :  <Link className='btn-link' to="/login"><FaRegUser className='icon-login'/> Fazer Login</Link>}
                </nav>
            </div>
            {/* <h1>Header do site</h1> */}
        </Container>
    );
};