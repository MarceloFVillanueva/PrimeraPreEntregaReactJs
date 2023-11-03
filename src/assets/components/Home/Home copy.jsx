import PropTypes from "prop-types";
import Titulo from '../Titulo/Titulo';
import Formulario from '../Formulario/Formulario';

function Home({ saludo }) {
  const tituloApp = 'Marce Proyect';
  const subTituloApp = "Primera Pre-Entrega React JS";

  return (
    <div>
        <Titulo titulo={tituloApp} subTitulo={subTituloApp} />
        <Formulario />
        <p>{saludo}</p>
    </div>
  );
}

Home.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default Home;

import PropTypes from "prop-types";
import Titulo from "../Titulo/Titulo"
import Formulario from '../Formulario/Formulario'



const Home = ( { saludo } ) => {
    // estados - llamados a las apis
    // NavBar(parametros)
    // props () puedo pasar datos de un componente padre a un componente hijo 
    const tituloApp = 'Este es un título de App'
    const subTituloApp = 'Este es un subtítulo de App'
   
    

    return (
        <div>
            <Titulo titulo={tituloApp} subTitulo={subTituloApp}/>
            <Formulario />
            <p>{saludo}</p>
        </div>
    )
}

Home.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default Home