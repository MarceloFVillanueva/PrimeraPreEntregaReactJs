import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";




const ItemListContainer = () => {

  const Loading = () => {
    return <h2>Cargando...</h2>
  }

  const [peliculas, setPeliculas] = useState([])
  const [ loading, setLoading ]   = useState(true)
  const [titulo, setTitulo] = useState("Peliculas en cartelera")
  const categoria = useParams().category

  useEffect(() => {

    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, 'peliculas');

    const tituloNuevo = categoria ? `Peliculas para ver | categoria: ${categoria}` : "Peliculas en cartelera"
    setTitulo(tituloNuevo)
    
    const queryFilter = categoria ? query(queryCollection, where('category', 'array-contains', categoria)) : queryCollection
    
    getDocs(queryFilter)
      .then(res => { setPeliculas( res.docs.map(pelicula => ({ id: pelicula.id , ...pelicula.data() }) ) )})
      .catch(err => console.log(err)) 
      .finally(() => setLoading(false))
      
  }, [categoria]);

  return (
    <div>
      {
        loading ?
          <Loading />
          :
          <ItemList peliculas={peliculas} titulo={titulo} /> 
      }
    </div>
  )
}

export default ItemListContainer
