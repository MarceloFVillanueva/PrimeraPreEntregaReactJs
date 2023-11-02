import NavBar from './assets/components/NavBar/NavBar'
import ProductListContainer from './assets/components/ItemListContainer/ItemListContainer'
import Titulo from './assets/components/Titulo/Titulo';
import ItemCount from './assets/components/IntemCount/ItemCount'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <>
      <NavBar/>
      <Titulo titulo='Segunda Pre-Entrega' subTitulo='Marcelo Villanueva'/>
      <ProductListContainer greeting='Bienvenidos!!!!'/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
    </>
  )
}

export default App