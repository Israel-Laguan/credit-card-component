import React from "react";
import '../shoppingCar/style/car.css'
import { Link } from 'react-router-dom'

const ShoppingCar = () => (
    <div className="shoppingCar">
        <h1 style={{ color: 'white' }}>Shopping cart</h1>
        <div className="flexCard">
            <div className="products">
                <div className="product">
                    <div className="imageProduct">
                        <img src="https://static.nike.com/a/images/t_default/89f96a84-f209-4559-b9da-28a153a85f2d/calzado-air-force-1-shadow-kTgn9J.png"/>
                    </div>
                    <div className="infoProduct">
                        <p>Nike Force Shoes</p>
                        <p>Color: white</p>
                    </div>
                    <div className="precioProduct">
                        <p>$200000</p>
                    </div>
                    <div className="pay">
                        <p>I pay</p>
                        <p>Make your purchase now!</p>
                        <Link className="link" to='/payment'>To pay</Link>
                    </div>
                </div>

                <div className="product">
                    <div className="imageProduct">
                        <img src="https://static.nike.com/a/images/t_default/b7cf5b56-f924-488a-9fb0-65efcca79cc4/air-force-1-07-mens-shoes-5xqQ6q.png"/>
                    </div>
                    <div className="infoProduct">
                        <p>Nike Force Shoes</p>
                        <p>Color: black</p>
                    </div>
                    <div className="precioProduct">
                        <p>$305000</p>
                    </div>
                    <div className="pay">
                        <p>I pay</p>
                        <p>Make your purchase now!</p>
                        <Link className="link" to='/payment'>To pay</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ShoppingCar
