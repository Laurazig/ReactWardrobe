import React from "react";
import { Link } from "react-router-dom";
import Form from "../Components/Form";

const WorkshopList = props => {
    return (
        <div className="cardContainer">
            <ul>
                {
                    props.workshops.map(obj => {
                        return (
                            <li className="workshopLi" key={obj.id} >
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

                    </div>
                </li>
            </ul>
            <Form 
                workshops = {props.workshops}
                name={props.name}
            />






        </div>
    )
}
export default WorkshopList