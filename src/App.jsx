import NavBar from './assets/components/NavBar/NavBar'
import Titulo from "./assets/components/Titulo/Titulo"
import ProductListContainer from './assets/components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer';
import Formulario from './assets/components/Formulario/Formulario';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <>
      <NavBar/>
      <Titulo titulo='Segunda Pre-Entrega | Marcelo Villanueva' subTitulo='Películas'/>
      <ProductListContainer/>
      <ItemDetailContainer/>
      <Formulario/>
    </>
  )
}

export default App