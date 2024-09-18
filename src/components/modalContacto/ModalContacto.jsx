import SeccionContacto from "../seccionContacto/SeccionContacto";



const ModalContacto = ({show, handleClose}) => {

    if (!show) return null;
    
    return (
        <article className="modal is-open">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>Contacto</h2>
                    <button className="modal-close" onClick={handleClose}>X</button>
                </div>
                <div className="modal-datos">
                    <SeccionContacto />
                </div>
            </div>
        </article>
    )
}

export default ModalContacto;