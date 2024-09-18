import "./seccionContacto.css";
import FormularioContacto from "../formularioContacto/FormularioContacto";


const SeccionContacto = () => {
    return (
        <section className="seccion__contacto" id="contacto">
        
        <div className="contenedor__formulario">
            <FormularioContacto />
        </div>
    </section>
);
}


export default SeccionContacto;