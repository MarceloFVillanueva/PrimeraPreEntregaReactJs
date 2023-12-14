import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import "./Carrito.css"
import { Link } from "react-router-dom";

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    // const handleQuitar = (id) => {
    //     quitarDelCarrito(id);
    // }

  return (
    <div className="container">
        <h1>Carrito</h1>
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <div className="card-cart">
                        <img src={prod.image} alt={prod.title} />
                        <div className="cart-detail">
                            <h3>{prod.title}</h3>
                            <p>Precio unit: ${prod.price}</p>
                            <p>Precio total: ${prod.price * prod.quantity}</p>
                            <p>Cantidad entradas: {prod.quantity}</p>
                        </div>
                        {/* <div className="cart-control">
                            <button onClick={() => handleQuitar(prod.id)}>
                                Eliminar pelicula
                            </button>
                        </div> */}
                    </div>
                </div>
            ))
        }
        {
            carrito.length > 0 ? 
            <>
                <h2>Precio Total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
            </> :
            <h4>El carrito está vacío...</h4>
        }
        <div>
            <Link className="button" to="/" >Volver</Link>
        </div>
    </div>
  )
}

export default Carrito