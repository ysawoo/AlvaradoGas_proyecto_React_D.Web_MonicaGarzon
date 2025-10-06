import React, { useState } from "react"; 
import Gasista from "../assets/Gasista.jpg.jpg";
import { db } from "../firebase/firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";


function FormularioReserva() {

  const opcionesServicio = [
        { value: "", label: "--- Selecciona un servicio ---" },
        { value: "instalaciones", label: "Instalaciones de gas" },
        { value: "planos", label: "Planos de proyectos - relevamiento" },
        { value: "fugas", label: "Detección de fugas" },
        { value: "mantenimiento", label: "Mantenimiento de artefactos" },
        { value: "hermeticidad", label: "Prueba de hermeticidad" },
        { value: "rehabilitacion", label: "Rehabilitación de servicio" },
    ];


  
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
        servicio: "",
    });
    const [loading, setLoading] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setLoading(true);

        if (!formData.nombre || !formData.email || !formData.mensaje || !formData.servicio) {
            alert("Por favor, completa todos los campos.");
            setLoading(false);
            return;
        }

        const nuevaReserva = {
            ...formData,

            fecha_pedido: new Date(),
            estado: "Pendiente",
        };

        try {
            const docRef = await addDoc(collection(db, "reservas"), nuevaReserva);
            
            console.log("Reserva enviada con ID: ", docRef.id);
            alert("¡Tu reserva ha sido enviada con éxito! La puedes ver en la pestaña Carrito.");
            
            setFormData({ nombre: "", email: "", mensaje: "" });

        } catch (error) {
            console.error("Error al añadir la reserva: ", error);
            alert("Hubo un error al enviar tu reserva. Por favor, inténtalo de nuevo.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Formulario de Reserva</h2>
            <div className="row">
                <div className="col-md-6 text-center">
                    <img
                        src={Gasista}
                        alt="Servicio de gasista"
                        className="img-fluid rounded shadow"
                    />
                </div>

                <div className="col-md-6">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label htmlFor="servicio" className="form-label">Servicio Requerido</label>
                            <select
                                className="form-control"
                                id="servicio"
                                name="servicio" 
                                value={formData.servicio}
                                onChange={handleChange}
                                required
                            >pronto
                                {opcionesServicio.map((opcion, index) => (
                                    <option 
                                        key={index} 
                                        value={opcion.value} 
                                        disabled={opcion.value === ""}
                                    >
                                        {opcion.label}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="nombre"
                                name="nombre" 
                                value={formData.nombre} 
                                onChange={handleChange} 
                                placeholder="Tu nombre" 
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email"
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="tu@email.com" 
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea
                                className="form-control"
                                id="mensaje"
                                name="mensaje" 
                                value={formData.mensaje}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Describe el servicio que necesitas"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary w-100"
                            disabled={loading} 
                        >
                            {loading ? "Enviando..." : "Reservar"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioReserva;