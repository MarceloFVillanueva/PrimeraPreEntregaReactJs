import PropTypes from "prop-types";
import "./ItemListContainer.css"

function ItemListContainer({greeting = 'Saludo por defecto'}) {
  return (
    <div>
        <p className="greeting">{greeting}</p>
    </div>
  )
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer