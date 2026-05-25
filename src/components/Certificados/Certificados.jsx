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
            descripcion:
                'Creación de interfaces modernas utilizando componentes reutilizables, hooks y diseño responsive.',
            fecha: '2026',
            archivo: '#',
            estado: 'Completado'
        },
        {
            id: 2,
            titulo: 'SQL para Desarrollo Web',
            institucion: 'Cisco Networking Academy',
            descripcion:
                'Consultas SQL, relaciones entre tablas y gestión de bases de datos para aplicaciones web.',
            fecha: '2025',
            archivo: '#',
            estado: 'Completado'
        },
        {
            id: 3,
            titulo: 'Laravel y Backend Development',
            institucion: 'Udemy',
            descripcion:
                'Desarrollo de aplicaciones web dinámicas utilizando Laravel, rutas, controladores y bases de datos.',
            fecha: '2026',
            archivo: '#',
            estado: 'En Formación'
        }
    ];

    return (

        <section
            id="certificaciones"
            className="certificaciones-section"
        >

            <div className="certificaciones-container">

                {/* ======================================
                    HEADER
                ====================================== */}
                <div className="certificaciones-header">

                    <span className="section-badge">
                        Formación Profesional
                    </span>

                    <h2 className="section-title">
                        Certificaciones
                    </h2>

                    <p className="section-description">
                        Cursos y certificaciones orientadas al desarrollo web,
                        análisis de datos y tecnologías modernas.
                    </p>

                </div>

                {/* ======================================
                    GRID
                ====================================== */}
                <div className="certificaciones-grid">

                    {certificacionesData.map((cert) => (

                        <div
                            key={cert.id}
                            className="cert-card"
                        >

                            {/* TOP */}
                            <div className="cert-top">

                                <div className="cert-icon">

                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                    </svg>

                                </div>

                                <span
                                    className={`cert-status ${cert.estado === 'En Formación'
                                            ? 'status-yellow'
                                            : 'status-green'
                                        }`}
                                >
                                    {cert.estado}
                                </span>

                            </div>

                            {/* BODY */}
                            <div className="cert-body">

                                <span className="cert-date">
                                    {cert.fecha}
                                </span>

                                <h3 className="cert-title">
                                    {cert.titulo}
                                </h3>

                                <span className="cert-company">
                                    {cert.institucion}
                                </span>

                                <p className="cert-description">
                                    {cert.descripcion}
                                </p>

                            </div>

                            {/* FOOTER */}
                            <div className="cert-footer">

                                <a
                                    href={cert.archivo}
                                    download
                                    className="cert-btn"
                                >

                                    Descargar PDF

                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>

                                        <polyline points="7 10 12 15 17 10"></polyline>

                                        <line
                                            x1="12"
                                            y1="15"
                                            x2="12"
                                            y2="3"
                                        >
                                        </line>
                                    </svg>

                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Certificaciones;