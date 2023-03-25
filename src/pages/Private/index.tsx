import { AuthContext } from "contexts/Auth/AuthContext";
import { useContext } from "react";
import { Container, ContainerTarefas, GridTarefas, Card } from "./styles";
import { FaRegCalendarPlus, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <Container>
            <div className="body-panel">
                <h2>Olá <b>{auth.user?.name}</b>, tudo bem? Seja bem vindo{`(a)`}!</h2>

                <ContainerTarefas>
                    <div className="row-between">
                        <h2>Tarefas cadastradas</h2>

                        <button type="button" className="add-task"><FaRegCalendarPlus className="icon" />Adicionar Tarefa</button>
                    </div>
                </ContainerTarefas>

                <GridTarefas>
                    <Card valueCard={1}>
                        <h3>Escrever ofício para procuradoria</h3>

                        <p>Preciso escrever um ofício urgente para ser enviado até o fim da semana para o escritório da empresa</p>

                        <div className="row-between">
                            <div className="row">
                                <FaRegEdit />
                                <FaRegTrashAlt />
                            </div>

                            <span>25/03/2023</span>
                        </div>
                    </Card>
                    <Card valueCard={2}>
                        <h3>Enviar mercadoria para outro batalhão</h3>
                        <p>Preciso escrever um ofício urgente para ser enviado até o fim da semana para o escritório da empresa</p>
                    </Card>
                    <Card>
                        <h3>Enviar e-mail para diretoria</h3>
                        <p>Preciso escrever um ofício urgente para ser enviado até o fim da semana para o escritório da empresa</p>
                    </Card>
                    <Card valueCard={3}>
                        <h3>Fazer reunião dia 02</h3>
                        <p>Preciso escrever um ofício urgente para ser enviado até o fim da semana para o escritório da empresa</p>
                    </Card>
                    <Card valueCard={4}>
                        <h3>Resolver documentaçao do carro 6528</h3>
                        <p>Preciso escrever um ofício urgente para ser enviado até o fim da semana para o escritório da empresa</p>
                    </Card>
                    <Card valueCard={5}>
                        <h3>Fazer reunião dia 02</h3>
                        <p>Preciso escrever um ofício urgente para ser enviado até o fim da semana para o escritório da empresa</p>
                    </Card>
                </GridTarefas>
            </div>
        </Container>
    );
}