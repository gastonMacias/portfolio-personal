import "./seccionHabilidadesFront.css";
import HabilidadCard from "../habilidadCard/HabilidadCard";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaFigma, FaTrello } from "react-icons/fa";


const SeccionHabilidadesFront = () => {
    return (
        <section className="seccion-habilidades">
            <>
            <HabilidadCard icon={FaHtml5} percentage={90} skillName="HTML"/>
            <HabilidadCard icon={FaCss3Alt} percentage={75} skillName="CSS"/>
            <HabilidadCard icon={FaJsSquare} percentage={80} skillName="JavaScript" />
            <HabilidadCard icon={FaReact} percentage={90} skillName="React" />
            <HabilidadCard icon={FaBootstrap} percentage={90} skillName="Bootstrap" />
            <HabilidadCard icon={FaGithub} percentage={70} skillName="Github" />
            <HabilidadCard icon={FaFigma} percentage={60} skillName="Figma" />
            <HabilidadCard icon={FaTrello} percentage={60} skillName="Trello" />
            </>
        </section>
    )
}


export default SeccionHabilidadesFront;

