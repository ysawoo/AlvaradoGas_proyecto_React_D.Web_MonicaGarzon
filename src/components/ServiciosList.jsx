import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";

function ServiciosList() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchServicios = async () => {
      const querySnapshot = await getDocs(collection(db, "servicios"));
      const serviciosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setServicios(serviciosData);
    };
    fetchServicios();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Servicios Disponibles</h2>
      <div className="row">
        {servicios.map(serv => (
          <div key={serv.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5>{serv.nombre}</h5>
                <p>${serv.precio}</p>
                <Link to={`/servicio/${serv.id}`} className="btn btn-outline-primary">
                  Ver Detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiciosList;
