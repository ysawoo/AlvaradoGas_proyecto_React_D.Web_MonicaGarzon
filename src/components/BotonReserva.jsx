import { useNavigate } from "react-router-dom";

const BotonReserva = ({ text = "Reserva" }) => {
  const navigate = useNavigate();

  const estilo = {
    display: "block",
    margin: "1rem auto",
    backgroundColor: "#2629df",
    color: "#f9ef42",
    padding: "1rem",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
    border: "none",
  };

  return (
    <button onClick={() => navigate("/reservas")} style={estilo}>
      {text}
    </button>
  );
};