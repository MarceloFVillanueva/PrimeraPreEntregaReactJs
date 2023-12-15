import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { Loading } from "../Loading/Loading"

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [movie,setMovie] = useState()
    const [isLoading,setIsLoading] = useState(true)
    const id = useParams().id;

    useEffect(() => {
    const fetchData = async () => {
      try {
        const dbFirestore = getFirestore();
        const queryDoc = doc(dbFirestore, 'peliculas', id);
        const docSnapshot = await getDoc(queryDoc);
  
        if (docSnapshot.exists()) {
          setMovie({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.log('El documento no existe');
        }   
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    };
      fetchData();
    }, [id]);

    return (
        <div className="cards-container">
            {
              isLoading ? 
                <Loading />
              :
                <ItemDetail movie={movie} />
            }
        </div>
    )

}

export default ItemDetailContainer