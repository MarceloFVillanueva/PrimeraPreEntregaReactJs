import NavBar from './assets/components/NavBar/NavBar'
import ProductListContainer from './assets/components/ItemListContainer/ItemListContainer'
import Titulo from './assets/components/Titulo/Titulo';
// import ItemCount from './assets/components/IntemCount/ItemCount'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <>
      <NavBar/>
      <Titulo titulo='Primera Pre-Entrega' subTitulo='Marcelo Villanueva'/>
      <ProductListContainer greeting='Bienvenidos!!!!'/>
      {/* <ItemCount initial = {1} stock = {10} onAdd = {(quantity) => console.log('Cantidad agregada ',quantity)}/> */}
    </>
  )
}

export default App


import { useState } from 'react'
import Home from './assets/components/Home/Home'
//import Titulo from './assets/components/Titulo/Titulo';
import NavBar from './assets/components/NavBar/NavBar.jsx'
import './App.css'
// import './App1.css'

function App() {
  const [counter, cambiarValorDeCounter] = useState(0)

  const handleCounter = () => {
    cambiarValorDeCounter(counter+1)
}
return ( 
  <>
      
      {/* { NavBar() } */}
      <NavBar />
      <Home saludo='hola como están' />
      <p>{counter}</p>
      <button onClick={handleCounter}>click +</button>
      
  </>
)
}

export default App