import React from "react";
import { FaCheck } from "react-icons/fa"
import "../MessagesCard/styles/Style-MessagesCard.css"

const Completed = () => (
    <div id="completed" className="completed">
        <div className="flex-completed">
            <div className="check">
                <FaCheck/>
            </div>
            <p>Successful payment</p>
        </div>
    </div>
)

export default Completed
