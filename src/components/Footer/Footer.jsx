import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">
                <div className="footer-brand">

                    <h2 className="footer-logo">
                        Fabricio <span>Santos</span>
                    </h2>
                    <p className="footer-description">
                        Estudiante de Informática y Desarrollo de Aplicaciones Web,
                        enfocado en crear soluciones modernas, funcionales y
                        orientadas a la experiencia del usuario.
                    </p>
                    <div className="footer-status">
                        <span className="status-dot"></span>
                        Disponible para prácticas y proyectos académicos
                    </div>

                </div>
                <div className="footer-links">

                    <h3 className="footer-title">
                        Navegación
                    </h3>

                    <ul>
                        <li>
                            <a href="#inicio">Inicio</a>
                        </li>

                        <li>
                            <a href="#sobre-mi">Sobre mí</a>
                        </li>

                        <li>
                            <a href="#tech-stack">Habilidades</a>
                        </li>

                        <li>
                            <a href="#servicios">Servicios</a>
                        </li>
                        <li>
                            <a href="#proyectos">Proyectos</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-contact">

                    <h3 className="footer-title">
                        Contacto
                    </h3>

                    <div className="contact-items">

                        <div className="contact-item">

                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="contact-icon"
                            >
                                <path d="M4 4h16v16H4z"></path>
                                <path d="m22 6-10 7L2 6"></path>
                            </svg>

                            <span>
                                santostorresfabricio@gmail.com
                            </span>

                        </div>

                        <div className="contact-item">

                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="contact-icon"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                                19.79 19.79 0 0 1-8.63-3.07
                                19.5 19.5 0 0 1-6-6
                                19.79 19.79 0 0 1-3.07-8.67
                                A2 2 0 0 1 4.11 2h3a2 2 0 0 1
                                2 1.72c.12.9.33 1.77.61 2.61
                                a2 2 0 0 1-.45 2.11L8.09 9.91
                                a16 16 0 0 0 6 6l1.47-1.18
                                a2 2 0 0 1 2.11-.45c.84.28
                                1.71.49 2.61.61A2 2 0 0 1 22 16.92z">
                                </path>
                            </svg>

                            <span>
                                +51 958 675 398
                            </span>

                        </div>

                        <div className="contact-item">

                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="contact-icon"
                            >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13
                                a9 9 0 0 1 18 0z">
                                </path>

                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>

                            <span>
                                Lima, Perú
                            </span>

                        </div>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 Fabricio Santos. Todos los derechos reservados.
                </p>

                <div className="footer-socials">

                    <a href="#">
                        GitHub
                    </a>

                    <a href="#">
                        LinkedIn
                    </a>

                    <a href="#">
                        Portfolio
                    </a>

                </div>

            </div>

        </footer>
    );
};

export default Footer;