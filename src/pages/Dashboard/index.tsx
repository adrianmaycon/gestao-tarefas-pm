import { AuthContext } from "contexts/Auth/AuthContext";
import { useContext, useState, FormEvent } from "react";
import { Container, ContainerTarefas, GridTarefas, Modal, Box } from "./styles";
import { CardTask } from "components/cardTask";
import { FaRegCalendarPlus } from "react-icons/fa";

export const Dashboard = () => {
    const auth = useContext(AuthContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateValidate, setDateValidate] = useState("");

    const [openBtnAdd, setOpenBtnAdd] = useState(false);
    const [listTask, setListTask] = useState([
        {
            id: "01",
            title: "Escrever ofício para procuradoria",
            description: "Preciso escrever um ofício urgente para ser enviado até o fim da semana para o escritório da empresa",
            date: "25-03-2023",
            type: 1
        },
    ]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (title && description && dateValidate) {
            const newTask = { id: String(listTask.length + 1), title: title, description: description, date: dateValidate, type: Math.floor(Math.random() * 7)}
            const arrAll = listTask;

            arrAll.push(newTask);

            setListTask(arrAll);

            setOpenBtnAdd(false);
        }
    }

    const maskData = (data: string) => {
        let arr = data.split("-");
        return `${arr[2]}/${arr[1]}/${arr[0]}`;
    };

    return (
        <>
            {openBtnAdd ? (
                <Modal>
                    <Box>
                        <h2>Cadastrar Tarefa</h2>

                        <form className="card-form" onSubmit={handleSubmit}>
                            <label>Título:</label>
                            <input 
                                required
                                type="text" 
                                value={title}
                                placeholder="Digite o título" 
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <label>Descrição:</label>
                            <input 
                                required
                                type="text" 
                                value={description}
                                placeholder="Digite a descrição" 
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <label>Data de Vencimento:</label>
                            <input 
                                required
                                type="date" 
                                value={dateValidate}
                                onChange={(e) => setDateValidate(e.target.value)}
                            />
                            
                            <div className="cont-grid">
                                <button type="submit" className="btn-link">Salvar</button>
                                <button type="button" className="btn-link-cancel" onClick={() => setOpenBtnAdd(false)}>Cancelar</button>
                            </div>
                        </form>
                    </Box>
                </Modal>
            ) : null}

            <Container>
                <div className="body-panel">
                    <h2>Olá <b>{auth.user?.name || "Sr(a)"}</b>, tudo bem? Seja bem vindo{`(a)`}!</h2>

                    <ContainerTarefas>
                        <div className="row-between">
                            <h2>Tarefas cadastradas</h2>

                            <button type="button" className="add-task" onClick={() => setOpenBtnAdd(true) }><FaRegCalendarPlus className="icon" />Adicionar Tarefa</button>
                        </div>
                    </ContainerTarefas>

                    <GridTarefas>

                        {listTask.length > 0 ? 
                            listTask.map((task) => <CardTask key={task.id} type={task.type} title={task.title} description={task.description} date={maskData(task.date)} />)
                            : 
                            <div onClick={() => setOpenBtnAdd(true)}>
                                <CardTask 
                                    iconsOff
                                    type={6}
                                    title="Clique para adicionar uma tarefa" 
                                />
                            </div>   
                        }
                    </GridTarefas>
                </div>
            </Container>
        </>
    );
}