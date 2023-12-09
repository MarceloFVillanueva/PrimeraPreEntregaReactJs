import PropTypes from "prop-types";
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({peliculas}) => {
  return (
    <div className="cards-container">
        {
            peliculas.length > 0  &&
            peliculas.map((pelicula) => {
            return (
                <Item key={pelicula.id} pelicula={pelicula}/>
              )
            })
        }
    </div>
  )
}

ItemList.propTypes = {
    peliculas: PropTypes.array.isRequired
  };

export default ItemList