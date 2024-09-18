import "./habilidadCard.css";

const HabilidadCard = ({ icon: Icon, percentage, skillName }) => {
    return (
        <div className="card">
            {/* Pasamos el porcentaje como estilo */}
            <div style={{ '--porcentaje': percentage }} className="porcentaje">
                <svg width="100" height="100">
                    {/* Ajustamos el pathLength para trabajar con porcentaje */}
                    <circle r="35" cx="50%" cy="50%" pathLength="100" />
                    <circle r="35" cx="50%" cy="50%" pathLength="100" />
                </svg>
                <span className="icono"><Icon /></span>
                <span className="nombre-habilidad">{skillName}</span>
            </div>
        </div>
    );
};

export default HabilidadCard;
