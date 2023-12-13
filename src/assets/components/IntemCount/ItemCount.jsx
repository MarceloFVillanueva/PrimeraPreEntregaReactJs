import PropTypes from "prop-types";
import { useCounter } from "../hook/useCounter";
import "./ItemCount.css"

const ItemCount = ({stock,initial}) => {

    const {cantidad,aumentar,disminuir} = useCounter(initial,stock)
    
    const handleAgregar = () => {
        console.log(cantidad)
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
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired
  };

export default ItemCount