import React, { useState } from "react";
import Shibori from "../Assets/ShiboriRound.jpg"
// import { Link } from "react-router-dom";
import WorkshopList from "./WorkshopList";

const Workshops = props => {

    const [newName, setNewName] = useState([]);
    console.log(props.workshops)

    // const updateNewName = newName => {
    //     setNewName(newName)
    // }
    return (
        <div className="workshopContainer" >
            <h1>Workshops in Leipzig</h1>
            <img className="img" src={Shibori} />
            <WorkshopList
                workshops={props.workshops}
                name={props.name}
                updateName={props.updateName}
                update={props.update}
            />
            {/* <div className="workshopCard">
                <div><strong>Name:</strong> Volkshochschule </div>
                <div>Workshop: tailoring basics </div>
                <div>Location: City center </div>
                <div>Date: 26.04.22</div>
                <div>Price: 20€ </div>
                <Link to="https://www.vhs-leipzig.de"></Link>
                <div className="button"><a target="_blank" href="https://www.vhs-leipzig.de/programm/kunst-kultur-kreativitaet.html?action%5B92%5D=category&cat_ID=495-CAT-KAT168">link</a></div>
            </div>
            <div className="workshopCard">
                <div>Name: </div>
                <div>Workshop: </div>
                <div>Location: </div>
                <div>Date:</div>
                <div>Price: </div>
            </div>
            <div className="workshopCard">
                <div className="addButton"><a target="_blank" >Click here to add your workshop!</a></div>
            </div> */}
        </div>
    )
}
export default Workshops