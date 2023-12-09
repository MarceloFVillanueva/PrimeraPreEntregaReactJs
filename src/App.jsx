import NavBar from './assets/components/NavBar/NavBar'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './assets/components/Nosotros/Nosotros';
// import CartWidget from './assets/components/CartWidget/CartWidget';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/peliculas' element={<ItemDetailContainer />} />
          <Route path='/peliculas/:title' element={<ItemDetailContainer />} />
          {/* <Route path='/carrito' element={<CartWidget />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App