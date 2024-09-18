import LineaDeTiempoVertical from "../lineaDeTiempoVertical/LineaDeTiempoVertical";


const ModalCarrera = ({show, handleClose}) => {

    if (!show) return null;
    
    return (
        <article className="modal is-open">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>Carrera</h2>
                    <button className="modal-close" onClick={handleClose}>X</button>
                </div>
                <div className="modal-datos">
                    <LineaDeTiempoVertical />
                </div>
            </div>
        </article>
    )
}

export default ModalCarrera;