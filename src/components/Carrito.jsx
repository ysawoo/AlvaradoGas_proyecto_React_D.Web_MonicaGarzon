import React, { useEffect, useState } from "react";
import { db } from '../firebase/firebaseConfig';
import { 
    collection, 
    query, 
    orderBy, 
    doc, 
    deleteDoc,
    onSnapshot 
} from "firebase/firestore";

function Carrito() { 
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true);

  
    useEffect(() => {
        const pedidosRef = collection(db, "reservas");
       
        const q = query(pedidosRef, orderBy("fecha_pedido", "desc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const pedidosData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            
            setPedidos(pedidosData);
            setLoading(false);
        }, (error) => {
            console.error("Error al suscribirse a los pedidos: ", error);
            setLoading(false);
        });
    return () => unsubscribe();
    }, []);

  
    const handleEliminarPedido = async (id) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este pedido de forma permanente?")) {
            try {
                const pedidoRef = doc(db, "reservas", id);
                await deleteDoc(pedidoRef);
                
                alert("Pedido eliminado con éxito.");

            } catch (error) {
                console.error("Error al eliminar el pedido: ", error);
                alert("Hubo un error al intentar eliminar el pedido.");
            }
        }
    };
    
   
    const formatDate = (timestamp) => {
        if (!timestamp) return "N/A";
        const date = new Date(timestamp.seconds * 1000);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    };

    if (loading) {
        return <div className="container mt-4 text-center">Cargando pedidos de reserva...</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5">Pedidos de Reserva ({pedidos.length})</h2>
            
            {pedidos.length === 0 ? (
                <p className="alert alert-info text-center">No hay reservas ingresadas en este momento.</p>
            ) : (
                <div className="row">
                    {pedidos.map(pedido => (
                        <div key={pedido.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0 text-capitalize">{pedido.servicio}</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        <strong>Nombre:</strong> {pedido.nombre}<br />
                                        <strong>Email:</strong> {pedido.email}<br />
                                        <strong>Mensaje:</strong> {pedido.mensaje}<br />
                                    </p>
                                </div>
                                <div className="card-footer text-muted d-flex justify-content-between align-items-center">
                                    <small>Reservado el: {formatDate(pedido.fecha_pedido)}</small>
                                    
                                    <button 
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleEliminarPedido(pedido.id)}
                                    >
                                        Eliminar 🗑️
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Carrito;