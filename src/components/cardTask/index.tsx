import { Container } from "./styles";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

export const CardTask = ({type = 0, iconsOff = false, title = "----------", description = "------- ---------- ------ ---- ------- -------- ------ --- -------------- --", date = "__/__/__" }) => {
    
    return (
        <Container valueCard={type}>
            <h3>{title}</h3>

            <p>{description}</p>

            <div className="row-between">
                {iconsOff ? <p>----</p> : <div className="row">
                    <FaRegEdit className="icon-btn" />
                    <FaRegTrashAlt className="icon-btn" />
                </div>}

                <span>{date}</span>
            </div>
        </Container>
    );
}