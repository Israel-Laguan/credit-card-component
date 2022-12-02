import React from 'react'
import '../MessagesError/Errores.css'

const ErrorName = () =>{
    return(
        <div className='error'>
            <h1>Error</h1>
            <p>Ha ocurrido un error</p>
            <p>Por favor revise su numero de tarjeta debe ser mayor a 13 y menor a 20 caracteres</p>
        </div>
    )
}

export default ErrorName