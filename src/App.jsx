import NavBar from './assets/components/NavBar/NavBar'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './assets/components/Nosotros/Nosotros';
// import CartWidget from './assets/components/CartWidget/CartWidget';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './assets/context/CartContext';
import { useState } from 'react';

function App() {

  const [carrito, setCarrito] = useState([]);
  console.log(carrito)

  return (
    <div>
      <CartContext.Provider value={{ carrito,setCarrito }}>
        <BrowserRouter>
          <NavBar/>

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/peliculas' element={<ItemDetailContainer />} />
            <Route path='/peliculas/:title' element={<ItemDetailContainer />} />
            <Route path='/categorias/:category' element={<ItemListContainer />} />
            {/* <Route path='/carrito' element={<CartWidget />} /> */}
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  )
}

export default App