import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [pelicula,setPelicula] = useState()
    const id = useParams().id;

    useEffect(() => {
    const fetchData = async () => {
      try {
        const dbFirestore = getFirestore();
        const queryDoc = doc(dbFirestore, 'peliculas', id);
        const docSnapshot = await getDoc(queryDoc);
  
        if (docSnapshot.exists()) {
          setPelicula({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.log('El documento no existe');
        }   
      } catch (error) {
        console.log(error);
      }
    };
      fetchData();
    }, [id]);

    return (
        <div className="cards-container">
            {pelicula && <ItemDetail pelicula={pelicula} />}
        </div>
    )

}

export default ItemDetailContainer