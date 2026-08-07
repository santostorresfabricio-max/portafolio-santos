import './Banner.css';
// import miFoto from '../../assets/miFoto.png';

const Banner = () => {
    return (
        <section id="hero" className="hero-section d-flex align-items-center min-vh-100 position-relative pt-5">
            <div className="container animate-fade-in mt-5">
                <div className="row align-items-center flex-column-reverse flex-lg-row">
                    {/* Contenido de Texto */}
                    <div className="col-lg-7 text-center text-lg-start mt-5 mt-lg-0">
                        {/* Etiqueta de Estado */}
                        <div className="status-badge d-inline-flex align-items-center gap-2 mb-4">
                            <span className="status-dot"></span>
                            <span>Disponible para nuevos proyectos</span>
                        </div>
                        
                        {/* Título Principal */}
                        <h1 className="hero-title display-3 fw-bold mb-3">
                            Fabricio <br className="d-none d-lg-block" />
                            <span className="text-cyan">Santos</span>
                        </h1>
                        
                        {/* Subtítulo (Rol) */}
                        <h2 className="hero-subtitle fs-4 text-secondary mb-4">
                            Estudiante de Desarrollo de Aplicaciones Web | Web Developer
                        </h2>

                        {/* Descripción */}
                        <p className="hero-description text-secondary mb-5 fs-5">
                            Desarrollo interfaces web modernas, responsivas y funcionales utilizando React, JavaScript, HTML y CSS. Actualmente fortalezco mis conocimientos en desarrollo frontend, backend y bases de datos mediante proyectos académicos y personales.
                        </p>

                        {/* Botones de Acción */}
                        <div className="hero-buttons d-flex gap-3 justify-content-center justify-content-lg-start">
                            <a href="#proyectos" className="btn btn-outline-info btn-neon px-4 py-2 fw-semibold">
                                Ver Proyectos
                            </a>
                            <a href="#contacto" className="btn btn-outline-light px-4 py-2 fw-semibold glass-btn">
                                Contáctame
                            </a>
                        </div>
                    </div>

                    {/* Foto de Perfil / Placeholder */}
                    <div className="col-lg-5 text-center mb-5 mb-lg-0">
                        <div className="profile-photo-wrapper position-relative mx-auto">
                            {/* Placeholder estilizado: Este div desaparecerá o servirá de fondo cuando pongas la etiqueta img */}
                            <div className="photo-placeholder d-flex align-items-center justify-content-center">
                                <span className="fs-5 text-secondary"></span>
                            </div>
                            
                            {/* 
                            <img
                                src={miFoto}
                                alt="Foto de Perfil"
                                className="profile-photo"
                            /> 
                            */}
                            
                            {/* Círculo luminoso de fondo */}
                            <div className="glow-circle"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Indicador de Scroll */}
            <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-4">
                <a href="#sobre-mi" className="text-light text-decoration-none">
                    <div className="mouse"></div>
                </a>
            </div>
        </section>
    );
};

export default Banner;