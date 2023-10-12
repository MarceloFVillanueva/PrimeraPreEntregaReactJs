import Titulo from "../Titulo/Titulo"

const Formulario = () => {
    return (
      <form>
        <Titulo titulo='titulo formulario' subTitulo='subtitulo de formulario'/>
        <input type="text" placeholder='ingrese el nombre'/>
      </form>
    )
  }

export default Formulario