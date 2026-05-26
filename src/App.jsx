import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Proyectos from './components/Proyectos/Proyectos';
import Contactos from './components/Contactos/Contactos';
import Servicios from './components/Servicios/Servicios';
import Footer from './components/Footer/Footer';
import Certificados from './components/Certificados/Certificados';

import './App.css';
import './index.css';

function App() {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column" style={{backgroundColor: 'var(--bg-dark-primary) !important'}}>
      <Navbar />
      <main className="flex-grow-1">
        <Banner />
        <Perfil />
        <Habilidades />
        <Certificados />
        <Proyectos />
        <Servicios />
        <Contactos />
      </main>
      <Footer />
    </div>
  )
}
export default App;
