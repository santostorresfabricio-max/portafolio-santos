import './Servicios.css';

const Servicios = () => {

    const serviciosData = [
        {
            id: 1,
            titulo: "Desarrollo Web Frontend",
            descripcion:
                "Creación de interfaces modernas, responsivas e interactivas utilizando HTML, CSS, JavaScript y React.",
            nivel: "En Formación",
            botonTexto: "DISPONIBLE",
            estado: "completado"
        },
        {
            id: 2,
            titulo: "Diseño Responsive",
            descripcion:
                "Adaptación de páginas web para dispositivos móviles, tablets y computadoras usando Flexbox y Grid.",
            nivel: "Aprendizaje Activo",
            botonTexto: "DISPONIBLE",
            estado: "completado"
        },
        {
            id: 3,
            titulo: "Desarrollo Backend",
            descripcion:
                "Construcción de lógica del servidor y manejo de bases de datos con PHP y Laravel.",
            nivel: "En Formación",
            botonTexto: "DISPONIBLE",
            estado: "completado"
        },
        {
            id: 4,
            titulo: "Gestión de Bases de Datos",
            descripcion:
                "Diseño y consultas SQL en MySQL, PostgreSQL, SQL Server y Oracle.",
            nivel: "Intermedio",
            botonTexto: "DISPONIBLE",
            estado: "proceso"
        },
        {
            id: 5,
            titulo: "Dashboards y Análisis de Datos",
            descripcion:
                "Desarrollo de visualizaciones e indicadores con Power BI para análisis empresarial.",
            nivel: "Intermedio",
            botonTexto: "En Proceso",
            estado: "proceso"
        },
        {
            id: 6,
            titulo: "Mantenimiento Web",
            descripcion:
                "Corrección de errores, optimización visual y mejora de rendimiento en páginas web.",
            nivel: "Aprendizaje Activo",
            botonTexto: "En Proceso",
            estado: "proceso"
        },
        
    ];

    return (
        <section id="servicios" className="servicios-section">

            <div className="servicios-container">

                <div className="section-header">
                    <h2 className="section-title">Servicios</h2>
                    <p className="section-subtitle">
                        Servicios orientados al desarrollo web, análisis de datos
                        y soluciones tecnológicas modernas.
                    </p>
                </div>

                <div className="servicios-grid">

                    {serviciosData.map((servicio) => (

                        <div key={servicio.id} className="service-card">

                            {/* CABECERA */}
                            <div className="service-header">

                                <div className="service-icon">

                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-cyan"
                                    >
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>

                                </div>

                                <span
                                    className={`service-badge ${
                                        servicio.estado === 'proceso'
                                            ? 'badge-yellow'
                                            : 'badge-green'
                                    }`}
                                >
                                    {servicio.botonTexto}
                                </span>

                            </div>

                            {/* CUERPO */}
                            <div className="service-body">

                                <h3 className="service-title">
                                    {servicio.titulo}
                                </h3>

                                <p className="service-desc">
                                    {servicio.descripcion}
                                </p>

                                <span className="service-level">
                                    {servicio.nivel}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Servicios;