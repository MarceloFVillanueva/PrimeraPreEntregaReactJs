import PropTypes from "prop-types";
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({movies, title}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="cards-container">
        {
            movies.length > 0  &&
            movies.map((prod) => {
            return (
                <Item key={prod.id} movie={prod}/>
              )
            })
        }
      </div>
    </div>
  )
}

ItemList.propTypes = {
    movies: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  };

export default ItemList