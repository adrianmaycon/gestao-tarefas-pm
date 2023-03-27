import { Container } from "./styles";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

export const CardTask = ({type = 0, concluded = false, iconsOff = false, title = "----------", description = "------- ---------- ------ ---- ------- -------- ------ --- -------------- --", date = "__/__/__" }) => {
    
    return (
        <Container valueCard={type} concluido={concluded}>
            <h3>{title}</h3>

            <p>{description}</p>

            <p><b>Data limite:</b> {date}</p>

            <div className="row-between">
                {iconsOff ? <p>----</p> : <div className="row">
                    <FaRegEdit className="icon-btn" />
                    <FaRegTrashAlt className="icon-btn" />
                </div>}

                <div className="row">
                    <label htmlFor="checkboxInput" className="label-checkbox">Concluído</label>
                    <input checked={concluded} name="checkboxInput" className="checkbox-input" type="checkbox" />
                </div>
            </div>
        </Container>
    );
}