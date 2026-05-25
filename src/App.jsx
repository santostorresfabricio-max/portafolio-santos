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
    <>
      <Navbar />
      <Banner />
      <Perfil />
      <Habilidades />
      <Certificados />
      <Proyectos />
      <Servicios />
      <Contactos />
      <Footer />

      {/* El resto de secciones irán aquí debajo.
Ejemplo: <Footer />
*/}
    </>
  )
}
export default App;
