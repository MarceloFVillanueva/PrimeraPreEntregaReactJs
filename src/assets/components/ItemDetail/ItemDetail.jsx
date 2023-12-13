import PropTypes from "prop-types";
import ItemCount from "../IntemCount/ItemCount";

import "./ItemDetail.css"

const ItemDetail = ({pelicula}) => {

  return (
    <article className="container">
        <header className="movie-title">
            <h1>
                {pelicula.title}
            </h1>
        </header>
        <div className="card-detail">
          <picture className="movie-image">
              <img src={pelicula.image} alt={`img-${pelicula.title}`} />
          </picture>
          <section className="movie-details">
              <p>Categoria: {pelicula.category}</p>
              <p>Descripción: {pelicula.long_description}</p>
              <p>Precio: ${pelicula.price}</p>
          </section>
        </div>
        <footer>
          <ItemCount pelicula={pelicula} />
        </footer>
    </article>
  )
}

ItemDetail.propTypes = {
    pelicula: PropTypes.object.isRequired
  };

export default ItemDetail