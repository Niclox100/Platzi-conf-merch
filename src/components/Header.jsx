import React, { useContext } from "react";
import { Link } from "react-router-dom"
import AppContext from "../context/AppContext"
import "../styles/components/Header.css"

const Header = () => {
    const { state } = useContext(AppContext);
    const { cart } = state
    console.log(cart.length);
    return(
        <div className="Header">
            <div className="Header-container">
                <Link to="/">Platzi Conf Merch</Link>                
                <h1 className="Header-title"></h1>
                <div className="Header-checkout">
                    <Link to="/checkout">
                        Tienda
                        {" "}
                        <i className="fas fa-shopping-basket"/>
                        {cart.length > 0 && <div className="Header-alert">{cart.length}{" "} Productos en el carrito</div>}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header