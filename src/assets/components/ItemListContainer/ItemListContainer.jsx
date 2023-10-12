import "./ItemListContainer.css"

function ItemListContainer({greeting = 'Saludo por defecto'}) {
  return (
    <div>
        <p className="greeting">{greeting}</p>
    </div>
  )
}

export default ItemListContainer