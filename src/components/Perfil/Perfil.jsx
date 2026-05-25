import './Perfil.css';
const Perfil = () => {
    return (
        <section id="sobre-mi" className="sobre-mi-section">
            <div className="sobre-mi-container">
                <h2 className="section-title">Sobre mí</h2>
                <div className="sobre-mi-grid">
                    {/* =====================================
TARJETA 1: PERFIL PROFESIONAL
====================================== */}
                    <div className="card">
                        <div className="card-header">
                            {/* Ícono de Usuario (SVG) */}
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4

4v2"></path>

                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h3>Perfil profesional</h3>
                        </div>

                        <p className="card-text">
                            Estudiante de Informática y Desarrollo de Aplicaciones Web,
                            actualmente cursando el III ciclo y fortaleciendo constantemente mis
                            conocimientos en tecnologías frontend y backend.

                            <br /><br />

                            Tengo experiencia desarrollando interfaces web modernas y responsivas
                            utilizando HTML, CSS, JavaScript y React, así como conocimientos en
                            bases de datos relacionales con MySQL, SQL Server y PostgreSQL.

                            <br /><br />

                            También cuento con conocimientos en herramientas de análisis de datos
                            como Power BI, Excel avanzado y Python orientado al análisis de
                            información. Me caracterizo por el aprendizaje continuo, la resolución
                            de problemas y el interés por desarrollar soluciones tecnológicas
                            funcionales enfocadas en mejorar la experiencia del usuario.
                        </p>
                    </div>
                    {/* =====================================
TARJETA 2: EDUCACIÓN
====================================== */}
                    <div className="card">
                        <div className="card-header">
                            {/* Ícono de Educación / Sombrero (SVG) */}
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                            </div>
                            <h3>Educación</h3>
                        </div>

                        <div className="timeline">

                            {/* Educación 1 */}
                            <div className="timeline-item">

                                <div className="timeline-header">

                                    <h4>Computación e Informática</h4>

                                    <span className="badge badge-outline">
                                        En Formación
                                    </span>

                                </div>

                                <span className="timeline-date">
                                    Instituto de Educación Superior
                                </span>

                            </div>

                            {/* Educación 2 */}
                            <div className="timeline-item">

                                <div className="timeline-header">

                                    <h4>Desarrollo de Aplicaciones Web</h4>

                                    <span className="badge badge-outline">
                                        Especialización
                                    </span>

                                </div>

                                <span className="timeline-date">
                                    Formación Académica y Proyectos Personales
                                </span>

                            </div>

                            {/* Educación 3 */}
                            <div className="timeline-item">

                                <div className="timeline-header">

                                    <h4>React & JavaScript Moderno</h4>

                                    <span className="badge badge-outline">
                                        Certificación
                                    </span>

                                </div>

                                <span className="timeline-date">
                                    Udemy / Coursera
                                </span>

                            </div>

                            {/* Educación 4 */}
                            <div className="timeline-item">

                                <div className="timeline-header">

                                    <h4>SQL y Bases de Datos</h4>

                                    <span className="badge badge-outline">
                                        Certificación
                                    </span>

                                </div>

                                <span className="timeline-date">
                                    Cisco Networking Academy
                                </span>

                            </div>

                            {/* Educación 5 */}
                            <div className="timeline-item">

                                <div className="timeline-header">

                                    <h4>Power BI y Análisis de Datos</h4>

                                    <span className="badge badge-outline">
                                        Formación Complementaria
                                    </span>

                                </div>

                                <span className="timeline-date">
                                    Microsoft Learn
                                </span>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};
export default Perfil;