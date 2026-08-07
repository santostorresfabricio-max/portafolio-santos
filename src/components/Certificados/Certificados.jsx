import './Certificados.css';

/* IMPORTAR PDFs */
/*
import certPowerBI from '../../assets/certificados/react.pdf';
import certSQL from '../../assets/certificados/sql.pdf';
import certPython from '../../assets/certificados/laravel.pdf';
*/

const Certificaciones = () => {
    const certificacionesData = [
        {
            id: 1,
            titulo: 'Desarrollo Web Frontend con React',
            institucion: 'Udemy',
            descripcion: 'Creación de interfaces modernas utilizando componentes reutilizables, hooks y diseño responsive.',
            fecha: '2026',
            archivo: '#',
            estado: 'Completado'
        },
        {
            id: 2,
            titulo: 'SQL para Desarrollo Web',
            institucion: 'Udemy',
            descripcion: 'Consultas SQL, relaciones entre tablas y gestión de bases de datos para aplicaciones web.',
            fecha: '2025',
            archivo: '#',
            estado: 'Completado'
        },
        {
            id: 3,
            titulo: 'Laravel y Backend Development',
            institucion: 'Udemy',
            descripcion: 'Desarrollo de aplicaciones web dinámicas utilizando Laravel, rutas, controladores y bases de datos.',
            fecha: '2026',
            archivo: '#',
            estado: 'En Formación'
        }
    ];

    return (
        <section id="certificaciones" className="certificaciones-section py-5">
            <div className="container mt-5">
                {/* HEADER */}
                <div className="text-center mb-5">
                    <span className="badge border border-info text-info bg-transparent mb-3 px-3 py-2 rounded-pill text-uppercase tracking-wide">
                        Formación Profesional
                    </span>
                    <h2 className="display-5 fw-bold mb-3">Certificaciones</h2>
                    <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '600px' }}>
                        Cursos y certificaciones orientadas al desarrollo web,
                        análisis de datos y tecnologías modernas.
                    </p>
                </div>

                {/* GRID */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {certificacionesData.map((cert) => (
                        <div key={cert.id} className="col">
                            <div className="card glass-card cert-card-neon h-100 border-0 rounded-4 d-flex flex-column">
                                <div className="card-body p-4 d-flex flex-column">
                                    {/* TOP */}
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className="icon-box-neon rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                        </div>
                                        <span className={`badge border ${cert.estado === 'En Formación' ? 'border-warning text-warning' : 'border-success text-success'} bg-transparent rounded-pill px-3 py-1`}>
                                            {cert.estado}
                                        </span>
                                    </div>

                                    {/* BODY */}
                                    <span className="text-cyan fw-bold small mb-2">{cert.fecha}</span>
                                    <h3 className="h5 fw-bold mb-2">{cert.titulo}</h3>
                                    <span className="text-light small fw-semibold mb-3">{cert.institucion}</span>
                                    <p className="text-secondary small flex-grow-1">{cert.descripcion}</p>
                                </div>

                                {/* FOOTER */}
                                <div className="card-footer bg-transparent border-0 p-4 pt-0">
                                    <a href={cert.archivo} download className="btn w-100 btn-outline-info btn-neon d-flex align-items-center justify-content-center gap-2 rounded-3">
                                        Descargar PDF
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificaciones;