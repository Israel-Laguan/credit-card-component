import React from "react"
import "../MessagesError/Errores.css"

const ErrorName = () =>{
    return(
        <div className='error ErrorNumber'>
            <h1>Error</h1>
            <p>Por favor revise su numero de tarjeta debe ser mayor a 13 y menor a 20 caracteres</p>
        </div>
    )
}

export default ErrorName;