const Form = ({formData,handleOnChange, errors, isValid}) => {

    const handleOnSubmit = (evt) => {
      evt.preventDefault()
      console.log("enviando...", formData)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input 
                type="text"
                name="nombre"
                placeholder="ingrese el nombre"
                value={formData.nombre}
                onChange={handleOnChange}
            />
            <br />
            {errors && errors.nombre && <span>{errors.nombre}</span>}
            <br />
            <input 
                type="text"
                name="correo"
                placeholder="ingrese el email"
                value={formData.correo}
                onChange={handleOnChange}
            />
            <br />
            {errors && errors.correo && <span>{errors.correo}</span>}
            <br />
            <button>Enviar</button>
        </form>
    )
}

export default Form