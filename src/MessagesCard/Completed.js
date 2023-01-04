import React from "react";
import { Link } from "react-router-dom"; 
import '../MessagesCard/styles/Style-MessagesCard.css'

const Completed = () => (
    <div id="completed" className="completed">
        <p>Successful payment</p>
        <Link to="/">Your shopping</Link>
    </div>
)

export default Completed
