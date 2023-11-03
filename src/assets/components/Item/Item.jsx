import PropTypes from "prop-types";
import "./Item.css"

const Item = ({product}) => {
  return (
    <article className="card">
      <header className="movie-title">
        <h2>
          {product.title}
        </h2>
      </header>
      <picture className="movie-image">
        <img src={product.image} alt={product.title} />
      </picture>
      <section className="movie-details">
        <p>Categoria: {product.category}</p>
        <p>Descripción: {product.description}</p>
        <p>Precio: ${product.price}</p>
      </section>
      <button className="btn btn-rent">
        Alquilar
      </button>
    </article>
  )
}

Item.propTypes = {
    product: PropTypes.object.isRequired
  };

export default Item