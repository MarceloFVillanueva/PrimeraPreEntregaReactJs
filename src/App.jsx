import NavBar from './assets/components/NavBar/NavBar'
// import Titulo from "./assets/components/Titulo/Titulo"
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import Nosotros from "./assets/components/Nosotros/Nosotros"
// import Formulario from './assets/components/Formulario/Formulario';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <>
      <BrowserRouter>
        
        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
        </Routes>

        <ItemListContainer/>

      </BrowserRouter>
    </>
  )
}

export default App