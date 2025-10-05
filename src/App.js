import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./Context_t/CarritoContext"; // ✅ importante
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ReservasPage from './pages/ReservasPage';
import ServiciosList from "./components/ServiciosList";
import ServicioDetalle from "./components/ServicioDetalle";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";
import AboutPage from './components/AboutUs'; 
import { useState } from "react";
import Servicios from './pages/Servicios';

function App() {
  // ✅ CORREGIDO: Inicializa el estado como un array vacío
  const [carrito, setCarrito] = useState([]); 

  const agregarAlCarrito = (servicio) => {
    // Es más seguro usar la función de actualización para evitar errores asíncronos
    setCarrito(prevCarrito => [...prevCarrito, servicio]);
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CarritoProvider> {/* ✅ envuelve toda la app */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Acerca-de" element={<AboutPage />} />
              <Route path="/Servicios" element={<Servicios />} />
          <Route path="/servicios" element={<ServiciosList />} />
          <Route path="/FormularioReserva" element={<ReservasPage />} />
          {/* Las rutas que usan las funciones de carrito SÍ las debes comentar */}
          <Route path="/servicio/:id" element={<ServicioDetalle agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/Carrito" element={<Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />} />
          <Route path="/Checkout" element={<Checkout carrito={carrito} />} />
          
        </Routes>
         <Footer />
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;
