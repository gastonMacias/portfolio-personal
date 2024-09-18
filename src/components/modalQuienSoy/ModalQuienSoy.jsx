import "./ModalQuienSoy.css";
import { IoClose } from "react-icons/io5";


const ModalQuienSoy = ({show, handleClose}) => {

    if (!show) return null;
    
    return (
        <article className="modal is-open">
            <div className="modal-container">
            <button className="modal-close" onClick={handleClose}><IoClose /></button>
                <div className="modal-header quienSoy-header">
                    <h2>Quien Soy</h2>
                </div>
                <div className="modal-datos datos-quienSoy">
                    <p>¡Bienvenido a mi portafolio! Soy <span className="resalte-quienSoy">Gastón Ezequiel Macías</span>, Técnico Electrónico especializado en 
                        telecomunicaciones. Desde joven me apasiona la tecnología, y a lo largo de los últimos años, 
                        me he sumergido en el <span className="resalte-quienSoy">Desarrollo Frontend</span>. He adquirido mis habilidades a través de cursos online 
                        y estudios autodidactas, siempre buscando mejorar y aprender más en este apasionante campo.

                        Además de la tecnología, soy un apasionado de los videojuegos, especialmente de World of Warcraft, 
                        donde disfruto tanto de la estrategia como del <span className="resalte-quienSoy">trabajo en equipo</span>. Esta pasión me ayuda a mantenerme creativo 
                        y enfocado, cualidades que también aplico en mis proyectos de desarrollo frontend.

                        Mi objetivo es continuar creciendo como desarrollador frontend y contribuir con proyectos 
                        que impulsen la innovación y el diseño eficiente.

                        Si te interesa saber más sobre mí o colaborar en un proyecto, no dudes en contactarme. 
                        <span className="resalte-quienSoy">¡Estoy siempre abierto a nuevas oportunidades!</span>
                    </p>
                </div>
            </div>
        </article>
    )
}

export default ModalQuienSoy;