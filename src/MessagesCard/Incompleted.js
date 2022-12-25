import React from "react";
import {Link} from 'react-router-dom'

const Incompleted = () => (
    <div className="incompleted" id="incompleted">
        <p>Error</p>
        <p>Try it again later</p>
        <Link to="/">Acept</Link>  
    </div>
)

export default Incompleted
