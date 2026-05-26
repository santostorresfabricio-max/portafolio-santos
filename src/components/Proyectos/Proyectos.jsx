import './Proyectos.css';

const Proyectos = () => {
    const proyectosData = [
        {
            id: 1,
            imagen: "https://images.pexels.com/photos/4421545/pexels-photo-4421545.jpeg",
            titulo: "Desarrollo Web y Panel Administrativo - VITA ALIA",
            descripcion: "Aplicación web para la gestión integral de una Clínica, incluyendo manejo de citas, pacientes y doctores.",
            tecnologias: ["HTML5", "CSS3", "JavaScript", "Laravel", "PostGreSQL"],
            linkDemo: "https://knightxhornet.com/",
            linkCodigo: "#"
        },
        {
            id: 2,
            imagen: "https://images.pexels.com/photos/11288390/pexels-photo-11288390.jpeg",
            titulo: "Sistema moderno de gestión clinica - VIDA & SALUD",
            descripcion: "Aplicación web que permite organizar y gestionar la información de una clínica de manera eficiente.",
            tecnologias: ["HTML5", "CSS3", "PHP", "MySQL"],
            linkDemo: "https://saludvida.xo.je/",
            linkCodigo: "#"
        },
    ];

    return (
        <section id="proyectos" className="proyectos-section py-5">
            <div className="container mt-5">
                <h2 className="display-5 fw-bold text-center mb-5">
                    Proyectos <span className="text-cyan">Destacados</span>
                </h2>
                
                <div className="row row-cols-1 row-cols-lg-2 g-5">
                    {proyectosData.map((proyecto) => (
                        <div key={proyecto.id} className="col">
                            <div className="card glass-card project-card-neon h-100 border-0 rounded-4 overflow-hidden">
                                {/* Contenedor de Imagen con Overlay */}
                                <div className="position-relative project-img-wrapper overflow-hidden">
                                    <img 
                                        src={proyecto.imagen} 
                                        className="card-img-top project-img" 
                                        alt={`Captura de ${proyecto.titulo}`} 
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="project-overlay d-flex align-items-center justify-content-center gap-3">
                                        <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn btn-neon rounded-circle p-3" title="Ver Demo">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                        <a href={proyecto.linkCodigo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle p-3 glass-btn" title="Ver Código">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Contenido de la Tarjeta */}
                                <div className="card-body p-4 d-flex flex-column">
                                    <h3 className="h4 fw-bold mb-3">{proyecto.titulo}</h3>
                                    <p className="text-secondary mb-4 flex-grow-1">{proyecto.descripcion}</p>
                                    
                                    {/* Tecnologías */}
                                    <div className="d-flex flex-wrap gap-2 mt-auto">
                                        {proyecto.tecnologias.map((tech, index) => (
                                            <span key={index} className="badge bg-dark border border-secondary text-light px-3 py-2 rounded-pill">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proyectos;