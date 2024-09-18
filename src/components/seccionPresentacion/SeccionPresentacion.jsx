import "./seccionPresentacion.css";


const SeccionPresentacion = () => {
    return  <section className="presentacion">
    <h2 className="nombre">Hola, soy <span className="nombre-destaque">Gastón</span></h2>
    <h3 className="rol">Desarrollador Frontend & Tester QA</h3>
    <p className="descripcion">
      Además, soy <span className="destaque">Técnico Electrónico</span> con pasión por la tecnología y la innovación.
    </p>
  </section>
}


export default SeccionPresentacion;