import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  return (
    <div>
        3 <Link className="" to="/cartWidget"><FaShoppingCart /></Link>
    </div>
  )
}
