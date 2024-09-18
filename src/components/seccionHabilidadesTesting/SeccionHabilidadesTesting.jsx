import "./SeccionHabilidadesTesting.css";
import HabilidadCard from "../habilidadCard/HabilidadCard";
import { FaBookmark, FaRegBookmark  } from "react-icons/fa";
import { SiSpeedtest, SiApachejmeter, SiJirasoftware, SiSelenium, SiPostman } from "react-icons/si";
import { BsFiletypeExe } from "react-icons/bs";


const SeccionHabilidadesTesting = () => {
    return (
        <section className="seccion-habilidades">
            <>
                <HabilidadCard icon={FaBookmark} percentage={90} skillName="Historias de usuario"/>
                <HabilidadCard icon={FaRegBookmark} percentage={85} skillName="Casos de prueba"/>
                <HabilidadCard icon={BsFiletypeExe} percentage={70} skillName="Ejecucion de pruebas"/>
                <HabilidadCard icon={SiSpeedtest} percentage={80} skillName="Testing de Accesibilidad"/>
                <HabilidadCard icon={SiApachejmeter} percentage={65} skillName="JMeter"/>
                <HabilidadCard icon={SiJirasoftware} percentage={75} skillName="Jira-Zephyr"/>
                <HabilidadCard icon={SiSelenium} percentage={55} skillName="Selenium"/>
                <HabilidadCard icon={SiPostman} percentage={45} skillName="Postman"/>
            </>
        </section>
    )
}

export default SeccionHabilidadesTesting;