import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./Context_t/CarritoContext";
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
 
  const [carrito, setCarrito] = useState([]); 

  const agregarAlCarrito = (servicio) => {
  
    setCarrito(prevCarrito => [...prevCarrito, servicio]);
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CarritoProvider> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Acerca-de" element={<AboutPage />} />
              <Route path="/Servicios" element={<Servicios />} />
          <Route path="/servicios" element={<ServiciosList />} />
          <Route path="/FormularioReserva" element={<ReservasPage />} />
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
