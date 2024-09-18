import LineaDeTiempoVertical from "../lineaDeTiempoVertical/LineaDeTiempoVertical";
import { IoClose } from "react-icons/io5";


const ModalCarrera = ({ show, handleClose }) => {

    if (!show) return null;

    return (
        <article className="modal is-open">

            <div className="modal-container">
                <button className="modal-close" onClick={handleClose}><IoClose /></button>
                <div className="modal-header">
                    <h2>Carrera</h2>

                </div>
                <div className="modal-datos">
                    <LineaDeTiempoVertical />
                </div>
            </div>
        </article>
    )
}

export default ModalCarrera;