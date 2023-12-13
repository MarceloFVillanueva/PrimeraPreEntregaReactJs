import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1>Carrito</h1>
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.title}</h3>
                    <p>Precio unit: ${prod.price}</p>
                    <p>Precio total: ${prod.price * prod.quantity}</p>
                    <p>Cantidad entradas: {prod.quantity}</p>
                    <br />
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
    </div>
  )
}

export default Carrito