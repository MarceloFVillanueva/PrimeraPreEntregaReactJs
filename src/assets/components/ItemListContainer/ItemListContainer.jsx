import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
// import pedirPeliculas from "../../help/pedirPeliculas"
// import filtrarPorCategoria from "../../help/filtrarPeliculaPorCategoria";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";




const ItemListContainer = () => {

  const Loading = () => {
    return <h2>Cargando...</h2>
  }

  const [peliculas, setPeliculas] = useState([])
  const [ loading, setLoading ]   = useState(true)
  const [titulo, setTitulo] = useState("Peliculas en cartelera")
  const categoria = useParams().category

  // useEffect(() => {
  //   pedirPeliculas()
  //     .then((res) => {
  //       const peliculasFiltradasPorCategoria = categoria ? filtrarPorCategoria({ peliculas: res, categoria }) : res;
  //       setPeliculas(peliculasFiltradasPorCategoria)

  //       const tituloNuevo = categoria ? `Peliculas para ver | categoria: ${categoria}` : "Peliculas en cartelera"
  //       setTitulo(tituloNuevo)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },[categoria])

  useEffect(() => {

    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, 'peliculas');

    getDocs(queryCollection)
      .then(res => {
        setPeliculas( res.docs.map(pelicula => ({ id: pelicula.id , ...pelicula.data() }) ) )
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    
  }, []);

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
