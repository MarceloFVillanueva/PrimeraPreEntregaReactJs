import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'

import "./Carrito.css"

const Carrito = () => {

    const { carrito, precioTotal, quitarDelCarrito, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    const handleQuitar = (id) => {
        quitarDelCarrito(id);
    }

    const terminarCompra = () => {
        const order = {};
        order.buyer = {name: 'marcelo', phone: '555-5555', email: 'mfv@gmail.com'};
        order.items = carrito.map(prod => ( { id: prod.id, price: prod.price, title: prod.title, cant: prod.quantity } ));
        order.total = precioTotal();

        const db = getFirestore()
        //Generar una orden
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        // Actualizar datos de un producto
        // const queryDoc = doc(db, 'peliculas', '52AyjXOCuM27uuzqtzcV')
        // updateDoc(queryDoc, {
        //     price: 100
        // })
        //     .then(() => console.log('producto actualizado') )
        //     .catch(err => console.log(err))

        // Actualizar datos de dos productos

        // const batch = writeBatch(db)

        // const queryUpdateProduct1 = doc(db, 'peliculas', '52AyjXOCuM27uuzqtzcV')
        // const queryUpdateProduct2 = doc(db, 'peliculas', 'NAy5PfTGS0H3BAqK2Fsb')

        // batch.update(queryUpdateProduct1, {
        //     price: 50
        // })
        // batch.update(queryUpdateProduct2, {
        //     price: 150
        // })

        // batch.commit()

    }

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
                        <div className="cart-control">
                            <button onClick={() => handleQuitar(prod.id)}>
                                X
                            </button>
                        </div>
                    </div>
                </div>
            ))
        }
        {
            carrito.length > 0 ? 
            <>
                <h2>Precio Total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <br />
                <button onClick={terminarCompra}>Terminar Compra</button>
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