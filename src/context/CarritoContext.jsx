import { createContext, useState, useContext } from "react";


const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);
export const CarritoProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);

 
  const agregarAlCarrito = (servicio) => {
    setCarrito((prev) => {
      const existeEnCarrito = prev.find((item) => item.id === servicio.id);

      if (existeEnCarrito) {
     
        return prev.map((item) =>
          item.id === servicio.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        
        return [...prev, { ...servicio, cantidad: 1 }];
      }
    });
  };
  
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  
  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};