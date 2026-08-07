import './Servicios.css';

const Servicios = () => {
    const serviciosData = [
        {
            id: 1,
            titulo: "Desarrollo Web Frontend",
            descripcion: "Creación de interfaces modernas, responsivas e interactivas utilizando HTML, CSS, JavaScript y React.",
            nivel: "En Formación",
            botonTexto: "EN PROCESO",
            estado: "proceso"
        },
        {
            id: 2,
            titulo: "Diseño Responsive",
            descripcion: "Diseño de interfaces adaptables a computadoras, tablets y dispositivos móviles, buscando una experiencia consistente en diferentes tamaños de pantalla.",
            nivel: "En Formación",
            botonTexto: "EN PROCESO",
            estado: "proceso"
        },
        {
            id: 3,
            titulo: "Desarrollo Backend",
            descripcion: "Construcción de lógica del servidor y manejo de bases de datos con PHP y Laravel.",
            nivel: "En Formación",
            botonTexto: "EN PROCESO",
            estado: "proceso"
        },
        {
            id: 4,
            titulo: "Gestión de Bases de Datos",
            descripcion: "Diseño de estructuras de datos y elaboración de consultas SQL para gestionar y consultar información en aplicaciones web.",
            nivel: "En Formación",
            botonTexto: "EN PROCESO",
            estado: "proceso"
        }
    ];

    return (
        <section id="servicios" className="servicios-section py-5">
            <div className="container mt-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">Áreas de <span className="text-cyan">Desarrollo</span></h2>
                    <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '600px' }}>
                        Áreas en las que aplico y continúo fortaleciendo mis conocimientos mediante proyectos académicos y personales.
                    </p>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {serviciosData.map((servicio) => (
                        <div key={servicio.id} className="col">
                            <div className="card glass-card service-card-neon h-100 border-0 rounded-4 p-4">
                                {/* CABECERA */}
                                <div className="d-flex justify-content-between align-items-start mb-4">
                                    <div className="icon-box-neon rounded-3 d-flex align-items-center justify-content-center p-3">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                                            <polyline points="16 18 22 12 16 6"></polyline>
                                            <polyline points="8 6 2 12 8 18"></polyline>
                                        </svg>
                                    </div>
                                    <span className={`badge border ${servicio.estado === 'proceso' ? 'border-warning text-warning' : 'border-success text-success'} bg-transparent rounded-pill px-3 py-2`}>
                                        {servicio.botonTexto}
                                    </span>
                                </div>

                                {/* CUERPO */}
                                <div className="card-body p-0 d-flex flex-column">
                                    <h3 className="h4 fw-bold mb-3">{servicio.titulo}</h3>
                                    <p className="text-secondary mb-4 flex-grow-1">{servicio.descripcion}</p>
                                    <div className="mt-auto">
                                        <span className="text-light fw-semibold small border-bottom border-cyan pb-1">{servicio.nivel}</span>
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

export default Servicios;