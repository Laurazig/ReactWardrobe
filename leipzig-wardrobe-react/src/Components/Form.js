import React from "react";

const Form = props => {
    const updateWorkshop = event => {
        event.preventDefault();

        let newWorkshop = {
            id: (props.workshops.length + 1).toString(),
            name: props.name,
            workshop: props.workshop,
            location:props.location,
            date:props.date,
            price:props.price,
            link:props.link

        }
        console.log(newWorkshop)
        props.update(newWorkshop)
    }

    const updateNewName = event => {
        props.updateName(event.target.value);
    }
    const updateNewWorkshop = event => {
        props.updateWorkshop(event.target.value);
    }
    const updateNewLocation = event => {
        props.updateLocation(event.target.value);
    }
    const updateNewDate = event => {
        props.updateDate(event.target.value);
    }
    const updateNewPrice = event => {
        props.updatePrice(event.target.value);
    }
    const updateNewLink = event => {
        props.updateLink(event.target.value);
    }


    return (
        <div id="addNewWorkshopCard">
            <form  onSubmit={updateWorkshop}>
                <h2>Add new workshop! (form.js)</h2>
                <div className="form_div">
                    <div>
                        <label>Name: </label>
                        <input placeholder="Enter name" value={props.name} onChange={updateNewName} />
                    </div>
                    
                    <div>
                        <label>Workshop:</label>
                        <input placeholder="Enter workshop" value={props.workshop} onChange={updateNewWorkshop} ></input>
                    </div>
                    
                    <div>
                        <label>Location:</label>
                        <input placeholder="Enter location" value={props.location} onChange={updateNewLocation}></input>
                    </div>
                    
                    <div>
                        <label>Date:</label>
                        <input placeholder="Enter date" value={props.date} onChange={updateNewDate}></input>
                    </div>
                    
                    <div>
                        <label>Price:</label>
                        <input placeholder="Enter price" value={props.price} onChange={updateNewPrice}></input>
                    </div>
                    
                    <div>
                        <label>link:</label>
                        <input placeholder="Enter link" value={props.link} onChange={updateNewLink}></input>
                    </div>
                    
                </div>
                <div className="form_div">
                    <button id="buttonAdd">add</button>
                </div>

            </form>
        </div>
    )
}
export default Form