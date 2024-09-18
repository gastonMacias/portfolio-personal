import React, { useState } from 'react';
import "./formularioContacto.css";

const FormularioContacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar el formulario
        console.log('Formulario enviado:', formData);
    };

    return (
        <form className="formulario-contacto" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <label htmlFor="message">Mensaje:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioContacto;
