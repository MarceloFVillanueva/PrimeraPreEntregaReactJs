import NavBar from './assets/components/NavBar/NavBar'
import ProductListContainer from './assets/components/ItemListContainer/ItemListContainer'
import Titulo from './assets/components/Titulo/Titulo';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <>
      <NavBar/>
      <Titulo titulo='Primera Pre-Entrega' subTitulo='Marcelo Villanueva'/>
      <ProductListContainer greeting='Bienvenidos!!!!'/>
    </>
  )
}

export default App