import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import pedirPeliculaPorNombre from "../../help/pedirPeliculaPorNombre.js"

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [pelicula,setPelicula] = useState()
    const title = useParams().title;

    useEffect(() => {
        pedirPeliculaPorNombre(title)
            .then(response => {
                setPelicula(response)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])
    
    return (
        <div className="cards-container">
            <ItemDetail {...pelicula}/>
        </div>
    )
}

export default ItemDetailContainer