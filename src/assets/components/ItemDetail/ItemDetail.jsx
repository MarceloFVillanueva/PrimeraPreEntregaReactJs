import PropTypes from "prop-types";
import ItemCount from "../IntemCount/ItemCount";
import { Link } from "react-router-dom";

import "./ItemDetail.css"

const ItemDetail = ({movie}) => {

  const category = movie.category.join('|');

  return (
    <article className="container">
        <header className="movie-title">
            <h1>
                {movie.title}
            </h1>
        </header>
        <div className="card-detail">
          <picture className="movie-image">
              <img src={movie.image} alt={`img-${movie.title}`} />
          </picture>
          <section className="movie-details-long">
              <p>Categoria: {category}</p>
              <p>Descripción: {movie.long_description}</p>
              <p>Precio: ${movie.price}</p>
              <Link className="button" to="/" >Volver</Link>
          </section>
        </div>
        <footer>
          <ItemCount movie={movie} />
        </footer>
    </article>
  )
}

ItemDetail.propTypes = {
    movie: PropTypes.object.isRequired
  };

export default ItemDetail