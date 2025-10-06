import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function Checkout({ carrito }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleCompra = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "pedidos"), {
      cliente: { nombre, email },
      items: carrito,
      fecha: new Date(),
    });
    alert("Compra registrada correctamente 🎉");
  };

  return (
    <div className="container mt-4">
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleCompra}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <button className="btn btn-success w-100">Confirmar Compra</button>
      </form>
    </div>
  );
}

export default Checkout;
