import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

  const {cantidadEnCarrito} = useContext(CartContext)

  return (
    <div>
      <span>{cantidadEnCarrito()} </span>
      <Link className="" to="/carrito"><FaShoppingCart /></Link>
    </div>
  )
}
