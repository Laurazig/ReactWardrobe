import React, { useState, useEffect } from "react";
import Shibori from "../Assets/ShiboriRound.jpg"
import { Link } from "react-router-dom"

const Workshops = props => {
     const [ newName, setNewName ] = useState([]);
   
     console.log(props.workshops)

const updateNewName = newName => {
    setNewName(newName)
}
    return (
        <div className="workshopContainer" >
            <h1>Workshops in Leipzig</h1>
            <img className="img" src={Shibori}/>
            <div className="cardContainer">
                <ul>
                    {
                        props.workshops.map(obj => {
                            return (
                                <li className="workshopLi">
                                    <div className="workshopCard">
                                        <div><strong>Name:</strong> {obj.name} </div>
                                        <div><strong>Workshop:</strong> {obj.workshop} </div>
                                        <div><strong>Location:</strong> {obj.location}</div>
                                        <div><strong>Date:</strong> {obj.date}</div>
                                        <div><strong>Price:</strong> {obj.price}</div>
                                        <div className="button"><a target="_blank" href={obj.link} >link</a></div>
                                    </div>
                                    
                                </li>
                            )
                        })
                        
                    }
                    <li>
                        <div className="workshopCard">
                            <label>Name:</label>
                            <input></input>
                            {/* <label>Workshop:</label>
                            <input></input>
                            <label>Location:</label>
                            <input></input>
                            <label>Date:</label>
                            <input></input>
                            <label>Price:</label>
                            <input></input>
                            <label>link:</label>
                            <input></input> */}
                            <div className="button"><a target="_blank" >add</a></div>
                        </div>
                    </li>
                </ul>
                





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
                    <div className="button"><a target="_blank" />link</a></div>
                </div>
                <div className="workshopCard">
                    <div>Name: {} </div>
                    <div>Workshop: {} </div>
                    <div>Location: {}</div>
                    <div>Date: {}</div>
                    <div>Price: {}</div>
                    <div className="button"><a target="_blank" >link</a></div>
                </div>
                <div className="workshopCard">
                <div className="addButton"><a target="_blank" >Click here to add your workshop!</a></div>
                  
                   
                </div>
            imported via fetch */}
            </div>
            
        </div>
    )
}

export default Workshops