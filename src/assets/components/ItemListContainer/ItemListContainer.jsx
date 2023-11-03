import { useState,useEffect } from "react";
import { getProducts } from "../../../asyncMock";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(()=> {
    getProducts()
    .then((res) => {
      setProducts(res)
    })
    .catch((err) =>{
      console.log(err)
    })
  }, [])

  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
