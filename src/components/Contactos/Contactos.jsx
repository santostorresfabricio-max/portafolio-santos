import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contactos.css';
const Contactos = () => {
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });
    const [cargando, setCargando] = useState(false);
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };
    const manejarEnvio = async (e) => {
        e.preventDefault();
        setCargando(true);
        try {
            const templateParams = {
                nombre: formulario.nombre,
                email: formulario.email,
                mensaje: formulario.mensaje
            };
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            Swal.fire({
                title: '¡Mensaje Enviado!',
                text: 'Gracias por contactarme. Te responderé a la brevedad.',
                icon: 'success',
                confirmButtonColor: '#00d8ff',
                background: '#111a2e',
                color: '#ffffff'
            });
            setFormulario({ nombre: '', email: '', mensaje: '' });
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al enviar el mensaje. Inténtalo más tarde.',
                icon: 'error',
                confirmButtonColor: '#00d8ff',
                background: '#111a2e',
                color: '#ffffff'
            });
        } finally {
            setCargando(false);
        }
    };
    return (
        <section id="contacto" className="contacto-section py-5">
            <div className="container mt-5">
                <h2 className="display-5 fw-bold text-center mb-5">
                    Trabajemos <span className="text-cyan">Juntos</span>
                </h2>

                <div className="row g-5">
                    {/* =====================================
                        COLUMNA IZQUIERDA: INFORMACIÓN
                    ====================================== */}
                    <div className="col-lg-5">
                        <div className="pe-lg-4">
                            <h3 className="h3 fw-bold mb-3">Ponte en Contacto</h3>
                            <p className="text-secondary fs-5 mb-5">
                                ¿Tienes un proyecto en mente o necesitas ayuda para
                                automatizar tus flujos de trabajo?
                                Me encantaría escucharte.
                            </p>

                            <div className="d-flex flex-column gap-4">
                                {/* Ítem Email */}
                                <div className="d-flex align-items-center">
                                    <div className="icon-box-neon rounded-circle d-flex align-items-center justify-content-center me-4" style={{ width: '60px', height: '60px' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="d-block text-secondary small fw-bold text-uppercase tracking-wide">Email</span>
                                        <a href="mailto:santostorresfabricio@gmail.com" className="text-light text-decoration-none fs-5 hover-neon">
                                            santostorresfabricio@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Ítem Ubicación */}
                                <div className="d-flex align-items-center">
                                    <div className="icon-box-neon rounded-circle d-flex align-items-center justify-content-center me-4" style={{ width: '60px', height: '60px' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="d-block text-secondary small fw-bold text-uppercase tracking-wide">Ubicación</span>
                                        <p className="text-light fs-5 m-0">Lima - Perú</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =====================================
                        COLUMNA DERECHA: FORMULARIO
                    ====================================== */}
                    <div className="col-lg-7">
                        <div className="card glass-card p-4 p-md-5 border-0 rounded-4">
                            <form onSubmit={manejarEnvio} className="contacto-form">
                                <div className="mb-4">
                                    <label htmlFor="nombre" className="form-label text-secondary fw-semibold">Nombre</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        className="form-control form-control-lg bg-dark text-light border-secondary border-opacity-50 form-neon"
                                        value={formulario.nombre}
                                        onChange={manejarCambio}
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label text-secondary fw-semibold">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control form-control-lg bg-dark text-light border-secondary border-opacity-50 form-neon"
                                        value={formulario.email}
                                        onChange={manejarCambio}
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="mensaje" className="form-label text-secondary fw-semibold">Mensaje</label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        className="form-control form-control-lg bg-dark text-light border-secondary border-opacity-50 form-neon"
                                        value={formulario.mensaje}
                                        onChange={manejarCambio}
                                        placeholder="Cuéntame sobre tu proyecto..."
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-outline-info btn-neon w-100 py-3 fs-5 fw-bold rounded-3">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactos;