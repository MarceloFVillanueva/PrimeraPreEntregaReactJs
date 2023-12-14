import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { Loading } from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css"




const ItemListContainer = () => {

  const [movies, setMovies] = useState([])
  const [ loading, setLoading ]   = useState(true)
  const [title, setTitle] = useState("Peliculas en cartelera")
  const category = useParams().category

  useEffect(() => {

    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, 'peliculas');

    const tituloNuevo = category ? `Peliculas para ver | categoria: ${category}` : "Peliculas en cartelera"
    setTitle(tituloNuevo)
    
    const queryFilter = category ? query(queryCollection, where('category', 'array-contains', category)) : queryCollection
    
    getDocs(queryFilter)
      .then(res => { setMovies( res.docs.map(pelicula => ({ id: pelicula.id , ...pelicula.data() }) ) )})
      .catch(err => console.log(err)) 
      .finally(() => setLoading(false))
      
  }, [category]);

  return (
    <div>
      {
        loading ?
          <Loading />
          :
          <ItemList movies={movies} title={title} /> 
      }
    </div>
  )
}

export default ItemListContainer
