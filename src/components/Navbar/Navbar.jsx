import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled ? 'nav-scrolled shadow' : 'bg-transparent'}`}>
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand fw-bold fs-3 text-light" href="#">
                    <span className="text-cyan text-shadow-glow">Fabricio</span> Santos
                </a>

                {/* Toggler */}
                <button 
                    className="navbar-toggler border-0 shadow-none" 
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className={`collapse navbar-collapse ${isOpen ? 'show bg-dark-mobile' : ''}`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center custom-nav-links">
                        <li className="nav-item">
                            <a className="nav-link text-light hover-neon mx-2" href="#sobre-mi" onClick={() => setIsOpen(false)}>Perfil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light hover-neon mx-2" href="#tech-stack" onClick={() => setIsOpen(false)}>Tech Stack</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light hover-neon mx-2" href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light hover-neon mx-2" href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light hover-neon mx-2" href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;