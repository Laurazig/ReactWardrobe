import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/LWlogo.jpg"


const Navigation = () => {
    return (
        <div className="nav">
            <div className="logo">
                <Link to="/">
                    <img className="nav_img" src={logo} alt="Leipzig Wardrobe logo"/>
                </Link>
            </div>
            <nav>
                <ul>
                <li>
                    <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/create">CREATE</Link>
                    </li>
                    <li>
                        <Link to="/workshops">WORKSHOPS</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navigation