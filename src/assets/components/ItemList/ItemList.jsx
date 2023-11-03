import PropTypes from "prop-types";
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products}) => {
  return (
    <div className="cards-container">
        {
            products.length > 0  &&
            products.map((product) => {
            return (
                <Item key= {product.id} product={product}/>
              )
            })
        }
    </div>
  )
}

ItemList.propTypes = {
    products: PropTypes.array.isRequired
  };

export default ItemList