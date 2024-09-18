import "./footer.css";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="logo">GM</h2>
            
            <div className="iconos-sociales">
                <a href="https://www.linkedin.com/in/gastonezequielmacias" target="_blank"><FaLinkedinIn /></a>
                <a href="https://github.com/gastonMacias" target="_blank"><FaGithub /></a>
                <a href="https://wa.me/5491159362462" target="_blank"><FaWhatsapp /></a>
            </div>
        </footer>
    )
}

export default Footer;