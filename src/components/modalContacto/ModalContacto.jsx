import SeccionContacto from "../seccionContacto/SeccionContacto";
import { IoClose } from "react-icons/io5";


const ModalContacto = ({ show, handleClose }) => {

    if (!show) return null;

    return (
        <article className="modal is-open">

            <div className="modal-container">
                <button className="modal-close" onClick={handleClose}><IoClose /></button>
                <div className="modal-header">
                    <h2>Contacto</h2>

                </div>
                <div className="modal-datos">
                    <SeccionContacto />
                </div>
            </div>
        </article>
    )
}

export default ModalContacto;