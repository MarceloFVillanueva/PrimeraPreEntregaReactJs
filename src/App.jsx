import NavBar from './assets/components/NavBar/NavBar'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './assets/components/Nosotros/Nosotros';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Carrito from './assets/components/Carrito/Carrito';
import { CartProvider } from './assets/context/CartContext';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/peliculas' element={<ItemDetailContainer />} />
            <Route path='/peliculas/:title' element={<ItemDetailContainer />} />
            <Route path='/categorias/:category' element={<ItemListContainer />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App