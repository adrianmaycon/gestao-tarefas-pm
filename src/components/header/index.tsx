import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useContext } from 'react';
import { Container } from "./styles";
import { FaRegUser, FaSignOutAlt, FaShapes } from "react-icons/fa";
import logoPmCe from 'assets/header/logoPmCe.svg';

export const Header = () => {
    const auth = useContext(AuthContext);

    const handlerLogout = async () => {
      await auth.signout();
      setTimeout(() => document.location.reload(), 300);;
    }

    return (
        <Container>
            <div className='box-container'>
                <Link to="/">
                    <img src={logoPmCe} alt='logo Pm Ce' />
                </Link>

                <nav>
                    {auth.user ? <Link className='btn-link' to="/dashboard"><FaShapes className='icon-login'/>Meu Painel</Link> : <Link className='btn-link' to="/">Página Inicial</Link>}
                    {auth.user ? <Link className='btn-link' onClick={handlerLogout} to="/" style={{backgroundColor: "#ff2a2a", border: 'none'}}><FaSignOutAlt className='icon-login'/> Sair</Link> :  <Link className='btn-link' to="/login"><FaRegUser className='icon-login'/> Fazer Login</Link>}
                </nav>
            </div>
            {/* <h1>Header do site</h1> */}
        </Container>
    );
};