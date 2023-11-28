import NavBar from './assets/components/NavBar/NavBar'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from "./assets/components/Nosotros/Nosotros"
import { BrowserRouter,Routes,Route } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/peliculas' element={<ItemListContainer />}/>
          <Route path='/peliculas/:categoria' element={<ItemListContainer />}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App