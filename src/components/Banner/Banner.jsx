import './Banner.css';
// import miFoto from '../../assets/miFoto.png';
const Banner = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                {/* 1. Etiqueta de Estado (Badge) */}
                <div className="status-badge">
                    <span className="status-dot"></span>
                    Disponible para nuevos proyectos
                </div>
                {/* 2. Foto de Perfil Circular */}
                <div className="profile-photo-container">
                    {/* Reemplazar src con {miFoto} cuando importen su imagen local 
                */}

                    {/* <img
                        src={miFoto}
                        alt="Foto de Perfil"
                        className="profile-photo"
                    /> */}
                </div>
                {/* 3. Título Principal */}
                <h1 className="hero-title">
                    Fabricio <br />
                    <span className="text-cyan">Santos</span>
                </h1>
                {/* 4. Subtítulo (Rol) */}
                <h2 className="hero-subtitle">
    Estudiante de Informática y Desarrollo de Aplicaciones Web |
    Frontend Developer Junior | Apasionado por el Desarrollo Web y la Tecnología
</h2>

{/* Descripción */}
<p className="hero-description">
    Desarrollo interfaces web modernas, responsivas y funcionales utilizando
    tecnologías como React, JavaScript, HTML y CSS. Actualmente me encuentro
    fortaleciendo mis conocimientos en desarrollo frontend, backend y bases de
    datos, creando proyectos que combinan diseño, lógica y experiencia de usuario.
    Me apasiona aprender nuevas tecnologías y construir soluciones digitales para
    resolver necesidades reales.
</p>
                {/* 6. Botones de Acción */}
                <div className="hero-buttons">
                    <a href="#proyectos" className="btn btn-primary">Ver

                        Proyectos</a>

                    <a href="#contacto" className="btn btn-
secondary">Contáctame</a>

                </div>
            </div>
            {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
            <div className="scroll-indicator">
                ↓
            </div>
        </section>
    );
};
export default Banner;