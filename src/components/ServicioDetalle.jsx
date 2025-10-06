import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function ServicioDetalle({ agregarAlCarrito }) {
  const { id } = useParams();
  const [servicio, setServicio] = useState(null);

  useEffect(() => {
    const fetchServicio = async () => {
      const docRef = doc(db, "servicios", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setServicio({ id: docSnap.id, ...docSnap.data() });
    };
    fetchServicio();
  }, [id]);

  if (!servicio) return <p>Cargando...</p>;

  return (
    <div className="container mt-4">
      <h3>{servicio.nombre}</h3>
      <p>{servicio.descripcion}</p>
      <p><strong>Precio:</strong> ${servicio.precio}</p>
      <button className="btn btn-success" onClick={() => agregarAlCarrito(servicio)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ServicioDetalle;
