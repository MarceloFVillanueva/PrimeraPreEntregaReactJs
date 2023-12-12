import PropTypes from "prop-types";
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({peliculas, titulo}) => {
  return (
    <div>
      <h1>{titulo}</h1>
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
    </div>
  )
}

ItemList.propTypes = {
    peliculas: PropTypes.array.isRequired,
    titulo: PropTypes.string.isRequired
  };

export default ItemList