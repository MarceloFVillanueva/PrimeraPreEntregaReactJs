import PropTypes from "prop-types";
import { useCounter } from "../hook/useCounter";
import "./ItemCount.css"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemCount = ({ pelicula }) => {

    const {carrito, setCarrito} = useContext(CartContext);

    const {cantidad,aumentar,disminuir} = useCounter(1,10);

    const handleAgregar = () => {
        
        const peliculaAgregada = {...pelicula,quantity:cantidad};
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === peliculaAgregada.id);

        if(estaEnElCarrito) {
            estaEnElCarrito.quantity += cantidad;
        }else{
            nuevoCarrito.push(peliculaAgregada);
        }
        setCarrito(nuevoCarrito)
    }

    return(
        <div className="counter">
            <h5>Cantidad de Entradas:</h5>
            <div className="controls">
                <button className="button" onClick={disminuir}>-</button>
                <h4 className="number">{cantidad}</h4>
                <button className="button" onClick={aumentar}>+</button>
            </div>
            <div>
                <button className="button btn-carrito" onClick={handleAgregar}>
                    Comprar entrada
                </button>
            </div>
        </div>
    )
}

ItemCount.propTypes = {
    pelicula: PropTypes.object.isRequired
}

export default ItemCount