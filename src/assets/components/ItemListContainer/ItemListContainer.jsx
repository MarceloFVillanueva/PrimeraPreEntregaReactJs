import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import pedirPeliculas from "../../help/pedirPeliculas"
import filtrarPorCategoria from "../../help/filtrarPeliculaPorCategoria";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css"

const ItemListContainer = () => {

  const [peliculas, setPeliculas] = useState([])
  const [titulo, setTitulo] = useState("Peliculas para alquilar")
  const categoria = useParams().category

  useEffect(() => {
    pedirPeliculas()
      .then((res) => {
        const peliculasFiltradasPorCategoria = categoria ? filtrarPorCategoria({ peliculas: res, categoria }) : res;
        setPeliculas(peliculasFiltradasPorCategoria)

        const tituloNuevo = categoria ? `Peliculas para alquilar - ${categoria}` : "Peliculas para alquilar"
        setTitulo(tituloNuevo)
      })
      .catch((error) => {
        console.log(error)
      })
  },[categoria])

  return (
    <div>
      <ItemList peliculas={peliculas} titulo={titulo} /> 
    </div>
  )
}

export default ItemListContainer
