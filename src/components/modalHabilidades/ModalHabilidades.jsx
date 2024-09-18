import SeccionHabilidades from "../seccionHabilidadesFront/SeccionHabilidadesFront";
import SeccionHabilidadesTesting from "../seccionHabilidadesTesting/SeccionHabilidadesTesting";
import "./modalHabilidades.css";


const ModalHabilidades = ({show, handleClose}) => {

    if (!show) return null;
    
    return (
        <article className="modal is-open">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>Habilidades</h2>
                    <button className="modal-close" onClick={handleClose}>X</button>
                </div>
                <div className="modal-datos">
                    <h3>Habilidades Frontend</h3>
                    <SeccionHabilidades />
                </div>
                <div className="modal-datos">
                    <h3>Habilidades Testing</h3>
                    <SeccionHabilidadesTesting />
                </div>
            </div>
        </article>
    )
}

export default ModalHabilidades;