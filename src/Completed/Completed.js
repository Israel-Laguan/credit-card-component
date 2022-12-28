import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Completed/Completed.css";

const Completed = () => (
    <div className="container-completed">
        <div>
            <div className="check-completed">
                <FaCheck/>
            </div>
            <h1>Payment completed</h1>
            <div>
                <p className="advertisement">Thanks for your purchase</p>
                <Link className="link-completed" to='/'>Shopping cart</Link>
            </div>
        </div>
    </div>
)

export default Completed
