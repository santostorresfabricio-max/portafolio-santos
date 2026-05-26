import './Perfil.css';

const Perfil = () => {
    return (
        <section id="sobre-mi" className="sobre-mi-section py-5">
            <div className="container mt-5">
                <h2 className="display-5 fw-bold text-center mb-5">
                    Sobre <span className="text-cyan">mí</span>
                </h2>
                
                <div className="row g-4">
                    {/* =====================================
                        TARJETA 1: PERFIL PROFESIONAL
                    ====================================== */}
                    <div className="col-lg-6">
                        <div className="card glass-card h-100 p-4 border-0 rounded-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="icon-box-neon me-3 d-flex align-items-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <h3 className="h4 fw-bold m-0">Perfil profesional</h3>
                                </div>
                                
                                <p className="text-secondary fs-6 lh-lg">
    Estudiante de Informática y Desarrollo de Aplicaciones Web en SENATI,
    actualmente cursando el III ciclo y enfocado en el desarrollo de
    aplicaciones web modernas y responsivas.

    <br /><br />

    Trabajo principalmente con tecnologías como HTML, CSS, JavaScript,
    React, PHP y Laravel, además de bases de datos relacionales como MySQL.

    <br /><br />

    Me caracterizo por el aprendizaje constante, la resolución de problemas
    y el interés por seguir creciendo como desarrollador frontend y backend.
</p>
                            </div>
                        </div>
                    </div>

                    {/* =====================================
                        TARJETA 2: EDUCACIÓN
                    ====================================== */}
                    <div className="col-lg-6">
                        <div className="card glass-card h-100 p-4 border-0 rounded-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="icon-box-neon me-3 d-flex align-items-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                        </svg>
                                    </div>
                                    <h3 className="h4 fw-bold m-0">Educación</h3>
                                </div>

                                <div className="timeline-neon">

    {/* Educación 1 */}
    <div className="timeline-item-neon position-relative pb-4 ps-4">
        <div className="timeline-dot position-absolute bg-cyan"></div>

        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
            <h4 className="h6 fw-bold m-0">
                Informática y Desarrollo de Aplicaciones Web
            </h4>

            <span className="badge border border-info text-info bg-transparent">
                III Ciclo
            </span>
        </div>

        <span className="text-secondary small">
            SENATI — Formación Profesional
        </span>
    </div>

    {/* Educación 2 */}
    <div className="timeline-item-neon position-relative pb-4 ps-4">
        <div className="timeline-dot position-absolute bg-cyan"></div>

        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
            <h4 className="h6 fw-bold m-0">
                Desarrollo Frontend
            </h4>

            <span className="badge border border-primary text-primary bg-transparent">
                En Formación
            </span>
        </div>

        <span className="text-secondary small">
            HTML, CSS, JavaScript y React
        </span>
    </div>

    {/* Educación 3 */}
    <div className="timeline-item-neon position-relative pb-4 ps-4">
        <div className="timeline-dot position-absolute bg-cyan"></div>

        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
            <h4 className="h6 fw-bold m-0">
                Desarrollo Backend
            </h4>

            <span className="badge border border-success text-success bg-transparent">
                Aprendizaje Activo
            </span>
        </div>

        <span className="text-secondary small">
            PHP, Laravel y arquitectura MVC
        </span>
    </div>

    {/* Educación 4 */}
    <div className="timeline-item-neon position-relative pb-4 ps-4">
        <div className="timeline-dot position-absolute bg-cyan"></div>

        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
            <h4 className="h6 fw-bold m-0">
                Bases de Datos Relacionales
            </h4>

            <span className="badge border border-warning text-warning bg-transparent">
                Formación Técnica
            </span>
        </div>

        <span className="text-secondary small">
            MySQL y modelado de bases de datos
        </span>
    </div>

    {/* Educación 5 */}
    <div className="timeline-item-neon position-relative ps-4">
        <div className="timeline-dot position-absolute bg-cyan"></div>

        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
            <h4 className="h6 fw-bold m-0">
                Aprendizaje Continuo
            </h4>

            <span className="badge border border-light text-light bg-transparent">
                Desarrollo Profesional
            </span>
        </div>

        <span className="text-secondary small">
            Proyectos personales, tecnologías web y mejora constante
        </span>
    </div>

</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Perfil;