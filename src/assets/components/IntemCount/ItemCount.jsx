import PropTypes from "prop-types";
import { useCounter } from "../hook/useCounter";
import "./ItemCount.css"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemCount = ({ movie }) => {

    const {addOnCart} = useContext(CartContext);

    const {quantity,increase,decrease} = useCounter(1,10);

    return(
        <div className="counter">
            <h5>Cantidad de Entradas:</h5>
            <div className="controls">
                <button className="button" onClick={decrease}>-</button>
                <h4 className="number">{quantity}</h4>
                <button className="button" onClick={increase}>+</button>
            </div>
            <div>
                <button className="button btn-carrito" onClick={() => {addOnCart(movie,quantity)}}>
                    Comprar entrada
                </button>
            </div>
        </div>
    )
}

ItemCount.propTypes = {
    movie: PropTypes.object.isRequired
}

export default ItemCount