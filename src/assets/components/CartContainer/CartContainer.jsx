import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from 'firebase/firestore'

import "./CartContainer.css"

const CartContainer = () => {

    const { cart, totalPrice, removeFromCart, emptyCart } = useContext(CartContext);

    const handleEmptyCart = () => {
        emptyCart();
    }

    const handleRemove = (id) => {
        removeFromCart(id);
    }

    const finishBuying = () => {
        const order = {};
        order.buyer = {name: 'marcelo', phone: '555-5555', email: 'mfv@gmail.com'};
        order.items = cart.map(prod => ( { id: prod.id, price: prod.price, title: prod.title, cant: prod.quantity } ));
        order.total = totalPrice();

        const db = getFirestore()
        
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

  return (
    <div className="container">
        <h1>Carrito</h1>
        {
            cart.map((prod) => (
                <div key={prod.id}>
                    <div className="card-cart">
                        <img src={prod.image} alt={`img-${prod.title}`} />
                        <div className="cart-detail">
                            <h3>{prod.title}</h3>
                            <p>Precio unit: ${prod.price}</p>
                            <p>Precio total: ${prod.price * prod.quantity}</p>
                            <p>Cantidad entradas: {prod.quantity}</p>
                        </div>
                        <div className="cart-control">
                            <button onClick={() => handleRemove(prod.id)}>
                                X
                            </button>
                        </div>
                    </div>
                </div>
            ))
        }
        {
            cart.length > 0 ? 
            <>
                <h2>Precio Total: ${totalPrice()}</h2>
                <button onClick={handleEmptyCart}>Vaciar</button>
                <br />
                <button onClick={finishBuying}>Terminar Compra</button>
            </> :
            <h4>El cart está vacío...</h4>
        }
        <div>
            <Link className="button" to="/" >Volver</Link>
        </div>
    </div>
  )
}

export default CartContainer