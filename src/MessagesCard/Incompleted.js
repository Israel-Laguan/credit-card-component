import React from "react";
import {Link} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const Incompleted = () => (
    <div className="incompleted" id="incompleted">
        <div className="flex-incompleted">
            <div className="cancel">
                <FaTimes/>
            </div>
            <div className="ad-cancel">
                <p>Error</p>
                <p>Your card has been declined please try again</p>
            </div>
            <Link to="/">Acept</Link>
        </div>
    </div>
)

export default Incompleted
