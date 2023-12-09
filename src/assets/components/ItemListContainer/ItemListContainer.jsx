import { useState,useEffect } from "react";
import pedirPeliculas from "../../help/pedirPeliculas"

import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    pedirPeliculas()
      .then((res) => {
        setPeliculas(res);
      })
  },[])

  return (
    <div>
      <ItemList peliculas={peliculas} /> 
    </div>
  )
}

export default ItemListContainer
