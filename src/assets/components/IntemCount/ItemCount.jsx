import PropTypes from "prop-types";
import { useCounter } from "../hook/useCounter";
import "./ItemCount.css"

const ItemCount = ({stock,initial,onAdd}) => {

    const {quantity,increment,decrement} = useCounter(initial,stock)
    const handleOnAdd = () => {
        onAdd(quantity)
    }

    return(
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="number">{quantity}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button btn-carrito" onClick={handleOnAdd}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired
  };

export default ItemCount