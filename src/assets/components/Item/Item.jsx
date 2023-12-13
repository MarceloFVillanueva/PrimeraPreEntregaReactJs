import PropTypes from "prop-types";
import "./Item.css"
import { Link } from "react-router-dom";
import ItemCount from "../IntemCount/ItemCount";

const Item = ({pelicula}) => {
  return (
    <article className="card">
      <header className="movie-title">
        <h2>
          {pelicula.title}
        </h2>
      </header>
      <picture className="movie-image">
        <img src={pelicula.image} alt={pelicula.title} />
      </picture>
      <section className="movie-details">
        <p>Categoria: {pelicula.category}</p>
        <p>Descripción: {pelicula.short_description}</p>
        <p>Precio: ${pelicula.price}</p>
        <Link className="ver-mas" to={`/peliculas/${pelicula.title}`}>Ver más</Link>
      </section>
      <ItemCount pelicula={pelicula} />
    </article>
  )
}

Item.propTypes = {
    pelicula: PropTypes.object.isRequired
  };

export default Item