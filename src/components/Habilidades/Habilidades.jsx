import './Habilidades.css';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPhp,
    FaReact,
    FaLaravel,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";

import {
    SiMysql
} from "react-icons/si";


const Habilidades = () => {
    const skillsData = [
    {
        id: 1,
        titulo: "HTML5",
        descripcion: "Estructuración semántica de interfaces web modernas.",
        nivel: "Fundamentos sólidos",
        botonTexto: "VER CERTIFICADO",
        estado: "completado",
        icono: <FaHtml5 />
    },
    {
        id: 2,
        titulo: "CSS3",
        descripcion: "Diseño responsive utilizando Flexbox, Grid y animaciones.",
        nivel: "Aprendizaje activo",
        botonTexto: "VER CERTIFICADO",
        estado: "completado",
        icono: <FaCss3Alt />
    },
    {
        id: 3,
        titulo: "JavaScript",
        descripcion: "Lógica de programación, DOM y consumo de APIs.",
        nivel: "Aprendizaje activo",
        botonTexto: "VER CERTIFICADO",
        estado: "completado",
        icono: <FaJs />
    },
    {
        id: 4,
        titulo: "PHP",
        descripcion: "Desarrollo backend y conexión con bases de datos.",
        nivel: "En formación",
        botonTexto: "VER CERTIFICADO",
        estado: "completado",
        icono: <FaPhp />
    },
    {
        id: 5,
        titulo: "Laravel",
        descripcion: "Desarrollo de aplicaciones web con arquitectura MVC.",
        nivel: "Aprendizaje activo",
        botonTexto: "VER CERTIFICADO",
        estado: "proceso",
        icono: <FaLaravel />
    },
    {
        id: 6,
        titulo: "React",
        descripcion: "Construcción de interfaces modernas basadas en componentes.",
        nivel: "En formación",
        botonTexto: "VER CERTIFICADO",
        estado: "proceso",
        icono: <FaReact />
    },
    {
        id: 7,
        titulo: "MySQL",
        descripcion: "Gestión y modelado de bases de datos relacionales.",
        nivel: "Fundamentos sólidos",
        botonTexto: "VER CERTIFICADO",
        estado: "completado",
        icono: <SiMysql />
    },
    {
        id: 8,
        titulo: "Git",
        descripcion: "Control de versiones y trabajo colaborativo.",
        nivel: "Aprendizaje activo",
        botonTexto: "VER CERTIFICADO",
        estado: "completado",
        icono: <FaGitAlt />
    },
    {
        id: 9,
        titulo: "GitHub",
        descripcion: "Gestión de repositorios y proyectos en la nube.",
        nivel: "Aprendizaje activo",
        botonTexto: "VER CERTIFICADO",
        estado: "completado",
        icono: <FaGithub />
    }
];

    return (
        <section id="tech-stack" className="habilidades-section py-5">
            <div className="container mt-5">
                <h2 className="display-5 fw-bold text-center mb-5">
                    Habilidades y <span className="text-cyan">Stack</span>
                </h2>
                
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="col">
                            <div className="card glass-card skill-card-neon h-100 border-0 rounded-4 text-center p-3">
                                <div className="card-body d-flex flex-column align-items-center">
                                    {/* Icono */}
                                    <div className="icon-box-neon rounded-circle mb-3 d-flex align-items-center justify-content-center">
                                        <div className="tech-icon">
                                            {skill.icono}
                                        </div>
                                    </div>
                                    
                                    {/* Badge */}
                                    <span className={`badge mb-3 border ${skill.estado === 'proceso' ? 'border-warning text-warning' : 'border-success text-success'} bg-transparent rounded-pill px-3 py-2`}>
                                        {skill.botonTexto}
                                    </span>
                                    
                                    {/* Textos */}
                                    <h3 className="h5 fw-bold mb-2">{skill.titulo}</h3>
                                    <p className="text-secondary small flex-grow-1">{skill.descripcion}</p>
                                    
                                    {/* Nivel */}
                                    <div className="mt-3 pt-3 w-100 border-top border-secondary border-opacity-25">
                                        <span className="text-light fw-semibold small">{skill.nivel}</span>
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

export default Habilidades;