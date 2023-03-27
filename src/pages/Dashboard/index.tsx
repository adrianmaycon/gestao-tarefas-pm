import { AuthContext } from "contexts/Auth/AuthContext";
import { useContext, useState, FormEvent } from "react";
import { Container, ContainerTarefas, GridTarefas, Modal, Box } from "./styles";
import { FaRegCalendarPlus } from "react-icons/fa";
import { CardTask } from "components/cardTask";
import classNames from "classnames";
import { toast } from "react-toastify";

export const Dashboard = () => {
    const auth = useContext(AuthContext);

    const [colorSelect, setColorSelect] = useState(1);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateValidate, setDateValidate] = useState("");

    const [openBtnAdd, setOpenBtnAdd] = useState(false);
    const [listTask, setListTask] = useState([
        {
            id: "0",
            title: "Clique para adicionar tarefa",
            description: "----- ---------- ---- ----- --- ------- ------ --------- -------- ----------- -----",
            date: "----------",
            type: 6,
        },
    ]);

    function clearFiels() {
        setTitle("");
        setDescription("");
        setDateValidate("");
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (title && description && dateValidate) {
            const newTask = { id: String(listTask.length + 1), title: title, description: description, date: dateValidate, type: colorSelect}
            const arrAll = listTask;

            arrAll.push(newTask);

            setListTask(arrAll);

            setOpenBtnAdd(false);

            toast.success("Tarefa criada com sucesso!", { position: toast.POSITION.BOTTOM_LEFT });

            clearFiels();
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
                            <textarea 
                                required
                                cols={40} 
                                rows={3}
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

                            <label>Cor de fundo:</label>

                            <div className="row-between">
                                <button type="button" onClick={() => setColorSelect(1)} className={classNames(`btn-color color-one ${colorSelect === 1 && "select-color"}`)}></button>
                                <button type="button" onClick={() => setColorSelect(2)} className={classNames(`btn-color color-two ${colorSelect === 2 && "select-color"}`)}></button>
                                <button type="button" onClick={() => setColorSelect(3)} className={classNames(`btn-color color-three ${colorSelect === 3 && "select-color"}`)}></button>
                                <button type="button" onClick={() => setColorSelect(4)} className={classNames(`btn-color color-four ${colorSelect === 4 && "select-color"}`)}></button>
                                <button type="button" onClick={() => setColorSelect(5)} className={classNames(`btn-color color-five ${colorSelect === 5 && "select-color"}`)}></button>
                                <button type="button" onClick={() => setColorSelect(6)} className={classNames(`btn-color color-six ${colorSelect === 6 && "select-color"}`)}></button>
                            </div>
                            
                            <div className="cont-grid">
                                <button type="submit" className="btn-link">Salvar</button>
                                <button type="button" className="btn-link-cancel" onClick={() => {setOpenBtnAdd(false); clearFiels()}}>Cancelar</button>
                            </div>
                        </form>
                    </Box>
                </Modal>
            ) : null}

            <Container>
                <div className="body-panel">
                    <h2>Olá <b>{auth.user?.name || "Sr(a) Adrian Maycon"}</b>, tudo bem? Seja bem vindo{`(a)`}!</h2>

                    <ContainerTarefas>
                        <div className="row-between">
                            <h2>Tarefas cadastradas</h2>

                            <button type="button" className="add-task" onClick={() => setOpenBtnAdd(true) }><FaRegCalendarPlus className="icon" />Adicionar Tarefa</button>
                        </div>
                    </ContainerTarefas>

                    <GridTarefas>

                        {(listTask.length > 1) ? 
                            listTask.map((task) => <CardTask key={task.id} type={task.type} title={task.title} description={task.description} date={maskData(task.date)} />) 
                            : 
                            listTask.map((task) => <div onClick={() => setOpenBtnAdd(true)} key={task.id}><CardTask iconsOff={Number(task.id) === 0} type={task.type} title={task.title} description={task.description} date={maskData(task.date)} /></div>)
                        }
                    </GridTarefas>
                </div>
            </Container>
        </>
    );
}