import "./Titulo.css"

const Titulo = ({titulo,subTitulo}) =>{
    return (
        <div>
            <h1 className="titulo">{titulo}</h1>
            <h2 className="subTitulo">{subTitulo}</h2>
        </div>
    )
  }

export default Titulo