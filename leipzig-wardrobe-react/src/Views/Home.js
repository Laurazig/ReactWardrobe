import React from "react";
import ShiboriShirt from "../Assets/shiboriShirt.png"

const Home = () => {
    return (
        <div>
            <h1>A Circular Economy Project</h1>
            <p>A guide for dressing only in clothes made in Leipzig. </p>
            <p>How to make your own and where to buy locally produced clothing.</p>
            <img className="img" src={ShiboriShirt} alt="beautiful T-shirt made from bedsheet and tye-dyed" />
            
            
            
        </div>
    )
}

export default Home