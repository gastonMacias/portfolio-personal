import "./seccionProyectos.css";


const SeccionProyectos = ({ proyectos }) => {

    return (
        <section className="proyectos">
            {proyectos.map((proyecto, index) => (
                <div className="proyectos__card" key={index}>
                    <img className="card__image" src={proyecto.image} alt={proyecto.title} />
                    <h3 className="card__title">{proyecto.title}</h3>
                    <p className="card__text">{proyecto.description}</p>
                    <button className="card__link"><a
                        href={proyecto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Link a la Pagina
                    </a></button>
                </div>
            ))}
        </section>
    );
};

export default SeccionProyectos;


