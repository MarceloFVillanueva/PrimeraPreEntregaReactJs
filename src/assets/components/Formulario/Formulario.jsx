import { useState } from "react"
import Form from "./Form"
import formWithValidation from "./formWithValidation"

const FormWithValidation = formWithValidation(Form)

const Formulario = () => {
  const [formData,setFormData] = useState({
    nombre: "",
    correo: ""
  })

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]:evt.target.value}
      )}

  return (
    <FormWithValidation 
      formData={formData} 
      handleOnChange={handleOnChange}
    />
  )
}

export default Formulario