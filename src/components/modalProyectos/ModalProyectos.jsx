import SeccionProyectos from "../seccionProyectos/SeccionProyectos";
import "./modalProyectos.css";
import { IoClose } from "react-icons/io5";

import { useEffect, useState } from "react";


const ModalProyectos = ({ show, handleClose }) => {


    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        fetch("/dataProyectos/dataProyectos.json")
            .then((response) => response.json())
            .then((data) => setProyectos(data))
            .catch((error) =>
                console.error("Error al cargar los proyectos:", error)
            );
    }, []);

    if (!show) return null;

    return (
        <>
            <article className="modal is-open">
                <div className="modal-container">
                    <button className="modal-close" onClick={handleClose}><IoClose /></button>
                    <div className="modal-header">
                        <h2>Proyectos</h2>

                    </div>
                    <div className="modal-datos">
                        <SeccionProyectos proyectos={proyectos} />
                    </div>
                </div>
            </article>
        </>
    )
}


export default ModalProyectos;