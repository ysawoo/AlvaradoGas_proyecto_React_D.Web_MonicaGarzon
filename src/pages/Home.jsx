import React from "react";
import Banner_AGas from "../assets/Banner_AGas.png";

function Home() {
  const container = {
    backgroundImage: `url(${Banner_AGas})`,
    height: "500px",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  const pedirPresupuesto = {
    position: "absolute",
    bottom: "30px",
    left: "30px",
  };

  return (
    <div style={container} className="d-flex align-items-center">
      <div style={pedirPresupuesto}>
        <button className="btn btn-warning btn-lg shadow">
          Pide un presupuesto
        </button>
      </div>
    </div>
  );
}

export default Home;

