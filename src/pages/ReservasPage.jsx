import React, { useState } from "react"; // 👈 1. Importar useState
import Gasista from "../assets/Gasista.jpg.jpg";
import { db } from "../firebase/config"; // Tu archivo de configuración
import { collection, addDoc } from "firebase/firestore";
// Si usaste el contexto para el carrito, necesitarás esto:
// import { useCarrito } from "../Context/CarritoContext";

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


    // 2. Estado para capturar los datos del formulario
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
        servicio: "",
    });
    const [loading, setLoading] = useState(false);
    
    // Si usaste el carrito para llevar el pedido:
    // const { carrito, vaciarCarrito } = useCarrito();

    // 3. Función para actualizar el estado con cada cambio en el input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value, // name es el atributo 'name' del input
        }));
    };

    // 4. Función para enviar la reserva a Firestore
    const handleSubmit = async (e) => {
        e.preventDefault(); // Detiene la recarga de la página
        setLoading(true);

        // Validaciones básicas (opcional)
        if (!formData.nombre || !formData.email || !formData.mensaje || !formData.servicio) {
            alert("Por favor, completa todos los campos.");
            setLoading(false);
            return;
        }

        const nuevaReserva = {
            ...formData,
            // 💡 Puedes añadir más datos relevantes aquí:
            // servicios_solicitados: carrito, // Si vienes del carrito
            fecha_pedido: new Date(),
            estado: "Pendiente",
        };

        try {
            // Guarda los datos en la colección 'reservas' (debe coincidir con tus reglas de seguridad)
            const docRef = await addDoc(collection(db, "reservas"), nuevaReserva);
            
            console.log("Reserva enviada con ID: ", docRef.id);
            alert("¡Tu reserva ha sido enviada con éxito! La puedes ver en la pestaña Carrito.");
            
            // Limpia el formulario y el carrito
            setFormData({ nombre: "", email: "", mensaje: "" });
            // vaciarCarrito(); // Si estás usando el CarritoContext

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
                {/* Columna con la imagen (sin cambios) */}
                <div className="col-md-6 text-center">
                    <img
                        src={Gasista}
                        alt="Servicio de gasista"
                        className="img-fluid rounded shadow"
                    />
                </div>

                {/* Columna con el formulario */}
                <div className="col-md-6">
                    {/* 5. Vinculamos la función handleSubmit al formulario */}
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label htmlFor="servicio" className="form-label">Servicio Requerido</label>
                            <select
                                className="form-control"
                                id="servicio"
                                name="servicio" // CRUCIAL: 'name' debe coincidir con el estado
                                value={formData.servicio}
                                onChange={handleChange}
                                required
                            >pronto
                                {opcionesServicio.map((opcion, index) => (
                                    <option 
                                        key={index} 
                                        value={opcion.value} 
                                        disabled={opcion.value === ""} // Deshabilita la opción predeterminada
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
                                name="nombre" // 👈 CRUCIAL: Añadir 'name'
                                value={formData.nombre} // 👈 CRUCIAL: Vincular valor al estado
                                onChange={handleChange} // 👈 CRUCIAL: Capturar el cambio
                                placeholder="Tu nombre" 
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email"
                                name="email" // 👈 CRUCIAL: Añadir 'name'
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
                                name="mensaje" // 👈 CRUCIAL: Añadir 'name'
                                value={formData.mensaje}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Describe el servicio que necesitas"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary w-100"
                            disabled={loading} // Deshabilita el botón mientras se envía
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