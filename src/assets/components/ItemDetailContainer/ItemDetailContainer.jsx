import "./ItemDetailContainer.css"
import { useEffect, useState } from "react"
import { getProductById } from "../../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [product,setProducts] = useState()

    useEffect(() => {
        getProductById(1)
            .then(response => {
                setProducts(response)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])
    
    return (
        <div className="cards-container">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer