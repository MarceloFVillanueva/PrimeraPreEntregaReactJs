const FiltrarPorCategoria = ({ peliculas, categoria }) => {
  
    return peliculas.filter((pelicula) => {
      const categoriasEnMinuscula = pelicula.category.split("|").map((categorias) => categorias.toLowerCase());
      return categoriasEnMinuscula.includes(categoria);
    });
};

export default FiltrarPorCategoria;