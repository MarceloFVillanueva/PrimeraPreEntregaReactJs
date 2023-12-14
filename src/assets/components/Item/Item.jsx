import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ItemCount from "../IntemCount/ItemCount";

import "./Item.css"

const Item = ({movie}) => {

  const categoria = movie.category.join('|');

  return (
    <article className="card">
      <header className="movie-title">
        <h2>
          {movie.title}
        </h2>
      </header>
      <picture className="movie-image">
        <img src={movie.image} alt={`img-${movie.title}`} />
      </picture>
      <section className="movie-details">
        <p>Categoria: {categoria}</p>
        <p>Descripción: {movie.short_description}</p>
        <p>Precio: ${movie.price}</p>
        <Link className="ver-mas" to={`/peliculas/${movie.id}`}>Ver más</Link>
      </section>
      <ItemCount movie={movie} />
    </article>
  )
}

Item.propTypes = {
    movie: PropTypes.object.isRequired
  };

export default Item