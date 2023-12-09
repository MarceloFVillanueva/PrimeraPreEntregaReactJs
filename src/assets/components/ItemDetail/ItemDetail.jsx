import PropTypes from "prop-types";
import ItemCount from "../IntemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({id, title, category, price, description, image}) => {
  
  const onAdd = cant => {
    console.log(cant)
  }

  return (
    <article className="container">
        <header className="movie-title">
            <h2>
                {title}
            </h2>
        </header>
        <div className="card-detail">
          <picture className="movie-image">
              <img src={image} alt={`img-${title}`} />
          </picture>
          <section className="movie-details">
              <p>Categoria: {category}</p>
              <p>Descripción: {description}</p>
              <p>Precio: ${price}</p>
          </section>
        </div>
        <footer>
          <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </footer>
    </article>
  )
}

// ItemDetail.propTypes = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired
//   };

export default ItemDetail