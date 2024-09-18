import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import "./navbar.css";

// modales

import ModalQuienSoy from "../modalQuienSoy/ModalQuienSoy";
import ModalHabilidades from "../modalHabilidades/ModalHabilidades";
import ModalCarrera from "../modalCarrera/ModalCarrera";
import ModalContacto from "../modalContacto/ModalContacto";


const Navbar = () => {

    // manejo los estados de cada modal

    const [modalQuienSoy, setModalQuienSoy] = useState(false);
    const modalQuienSoyClose = () => setModalQuienSoy(false);
    const modalQuienSoyOpen = () => setModalQuienSoy(true);

    const [modalHabilidades, setModalHabilidades] = useState(false);
    const modalHabilidadesClose = () => setModalHabilidades(false);
    const modalHabilidadesOpen = () => setModalHabilidades(true);

    const [modalCarrera, setModalCarrera] = useState(false);
    const modalCarreraClose = () => setModalCarrera(false);
    const modalCarreraOpen = () => setModalCarrera(true);

    const [modalContacto, setModalContacto] = useState(false);
    const modalContactoClose = () => setModalContacto(false); 
    const modalContactoOpen = () => setModalContacto(true);


    useEffect(() => {
        const nav = document.querySelector("#nav");
        const abrir = document.querySelector("#abrir");
        const cerrar = document.querySelector("#cerrar");

        if (abrir && cerrar) {
            abrir.addEventListener("click", () => {
                nav.classList.add("visible");
            });

            cerrar.addEventListener("click", () => {
                nav.classList.remove("visible");
            });

            return () => {
                abrir.removeEventListener("click", () => {
                    nav.classList.add("visible");
                });

                cerrar.removeEventListener("click", () => {
                    nav.classList.remove("visible");
                });
            };
        }
    }, []);


    return <header className="header">
        <h2 className="logo">GM</h2>
        <button className="abrir-menu" id="abrir"><CiMenuBurger /></button>
        <nav className="nav" id="nav">
            <button className="cerrar-menu" id="cerrar"><IoClose /></button>
            <ul className="nav__list">
                <li className="list__item"><button onClick={modalQuienSoyOpen}>Quien soy</button></li>
                <li className="list__item"><button onClick={modalHabilidadesOpen}>Habilidades</button></li>
                <li className="list__item"><button onClick={modalCarreraOpen}>Carrera</button></li>
                <li className="list__item"><button onClick={modalContactoOpen}>Contacto</button></li>
            </ul>
        </nav>
        <ModalQuienSoy show={modalQuienSoy} handleClose={modalQuienSoyClose}/>
        <ModalHabilidades show={modalHabilidades} handleClose={modalHabilidadesClose}/>
        <ModalCarrera show={modalCarrera} handleClose={modalCarreraClose}/>
        <ModalContacto show={modalContacto} handleClose={modalContactoClose}/>
    </header>
}

export default Navbar;