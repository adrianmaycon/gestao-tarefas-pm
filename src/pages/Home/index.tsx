import { Container } from './styles';
import logoPmCE from 'assets/logoPMCE.png';
import { FaThList } from "react-icons/fa";

export const Home = () => {
    return (
        <Container>
            <div className='box-home-body'>
                <img src={logoPmCE} alt="" />

                <div className='body-home-content'>
                    <h2 className='title'>Sistema de Gestão de Tarefas da PMCE</h2>
                    <h3 className='sub-title'>Um software de gestão capaz de integrar e organizar todos os setores da da PMCE.</h3>

                    <div className='row'>
                        <FaThList className='icon' />

                        <p>
                            <b>Organize e execute o fluxo de trabalho</b><br/>
                            Otimize e concentre sua demanda em um só lugar.
                        </p>
                    </div>

                    <p>
                        Todo direito reservado ao desenvolvedor <a href="https://www.linkedin.com/in/adrianmaycon/" target="blank">Adrian Maycon</a>.<br />
                        <br/>
                        Obs: *Este site não é oficial, ele foi criado apenas para testes de conhecimento.
                    </p>
                </div>
            </div>
        </Container>
    );
}