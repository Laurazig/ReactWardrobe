import React from "react";
import Shibori from "../Assets/ShiboriRound.jpg"


const Workshops = () => {
    return (
        <div >
            <h1>Workshops</h1>
            <img className="img" src={Shibori}/>
            <div className="cardContainer">
                <div className="workshopCard">Name: Workshop: Location: Date: Price: 
                <button>link</button>
                </div>
                <div className="workshopCard">Name: Workshop: Location: Date: Price: link</div>
                <div className="workshopCard">Name: Workshop: Location: Date: Price: link</div>
            {/* imported via fetch */}
            </div>
            
        </div>
    )
}

export default Workshops