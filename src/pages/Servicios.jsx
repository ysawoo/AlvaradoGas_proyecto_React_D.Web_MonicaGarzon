import React from "react";
import { useNavigate } from "react-router-dom";
import instalacion from "../assets/instalacion.jpg"; 
import mantenimiento from "../assets/mantenimiento.jpg";
import pruebaDeHermeticidad from "../assets/pruebaDeHermeticidad.jpg";
import planosGas from "../assets/planosGas.jpg";
import rehabilitacionDeGas from "../assets/rehabilitacionDeGas.jpg"
import fugaGas from "../assets/fugaGas.jpg";
import { useCarrito } from "../context/CarritoContext";


function Servicios() {
    const navigate = useNavigate();
    const { agregarAlCarrito } = useCarrito();

    const serviciosData = [
        { id: "inst", titulo: "Instalaciones", desc: "Descripción detallada de instalaciones de gas.", img: instalacion },
        { id: "planos", titulo: "Planos de proyectos - relevamiento", desc: "Diseño y relevamiento de planos conforme a normativa.", img: planosGas },
        { id: "fugas", titulo: "Detección de fugas", desc: "Servicio de detección y reparación de fugas con tecnología avanzada.", img: fugaGas },
        { id: "mant", titulo: "Mantenimiento de artefactos", desc: "Mantenimiento preventivo y correctivo de artefactos a gas.", img: mantenimiento },
        { id: "herm", titulo: "Prueba de hermeticidad", desc: "Realización de pruebas de hermeticidad certificadas.", img:  pruebaDeHermeticidad},
        { id: "rehab", titulo: "Rehabilitación de servicio", desc: "Servicio de rehabilitación de suministro de gas.", img: rehabilitacionDeGas },
    ];

    const catalogoStyle = { 
        backgroundColor: "#17182fff",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "space-around",
        paddingBottom: "3rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        gap: "2rem",
        flexWrap: "wrap",
    };

    const servicioCardStyle = { 
        color: "#d7d8e8ff",
        backgroundColor: "#17182fff",
        border: "2px solid #fff3f0ff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        width: "300px",
        padding: "1rem",
        textAlign: "center",
    };

    
    const imgServicioStyle = { 
        width: "300px",
        display: "block",
        margin: "0 auto",
        paddingTop: "1rem",
    };


    const botonReservarStyle = { 
        display: "block",
        margin: "0 auto",
        paddingTop: "1rem",
        backgroundColor: "#2629dfff",
        color: "#f9ef42ff",
        padding: "1rem",
        fontSize: "1rem",
        borderRadius: "5px",
        cursor: "pointer",
        textAlign: "center",
        border: "none",
        marginTop: "1rem", 
    };

    return (
        <div style={{ backgroundColor: "#17182f", minHeight: "100vh" }}> 

            <h1
                style={{
                    color: "#fa5e25ff",
                    textAlign: "center",
                    paddingTop: "2rem", 
                    margin: 0,
                }}
            >
                Nuestros servicios
            </h1>

            <div style={catalogoStyle}> 
                {serviciosData.map((item, index) => (
                    <div key={item.id} style={servicioCardStyle}> 
                        <img src={item.img} alt={item.titulo} style={imgServicioStyle} />
                        <h2>{item.titulo}</h2>
                        <p>{item.desc}</p>
                        
                        <button
                            style={botonReservarStyle}
                            onClick={() => navigate("/FormularioReserva")} 
                        >
                            Reservar
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Servicios;