import { useState } from "react"

const formWithValidation = (FormWrappedComponent) => {

  const NewFormWithValidation = (props) =>  {
    const [errors, setError] = useState({})

    const validateForm = () => {
      let newErrors = {}
      let isValid = true

      if (!props.formData.nombre){
        newErrors.nombre = "El campo nombre es obligatorio"
        isValid = false
      }
      if (!props.formData.correo){
        newErrors.correo = "El campo correo es obligatorio"
        isValid = false
      }

      setError(newErrors)
      
      return isValid
    
    }

    return (
      <FormWrappedComponent
        {...props}
        errors = {errors}
        validateForm={validateForm}
      />
    )
  }
  return NewFormWithValidation
}

export default formWithValidation