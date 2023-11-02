import PropTypes from "prop-types";
import "./Titulo.css"

const Titulo = ({titulo,subTitulo}) =>{
    return (
        <div>
            <h1 className="titulo">{titulo}</h1>
            <h2 className="subTitulo">{subTitulo}</h2>
        </div>
    )
  }

  Titulo.propTypes = {
    titulo: PropTypes.string.isRequired,
    subTitulo: PropTypes.string.isRequired,
  };

export default Titulo