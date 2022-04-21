import React from "react";

const Form = props => {
    const updateWorkshop = event =>{
        event.preventDefault();

        let newWorkshop = {
            id: (props.workshops.length +1).toString(),
            name:props.name 
        }
    }
    return(
        <div>
            <Form >
            {/* onSubmit={updateAlbums}  */}
                <h2>Add new workshop!</h2>
                <div className="form_div">
                    <input placeholder="Enter name"  />
                    {/* onChange={} */}
                </div>
                <div className="form_div">
                <div className="button"><a target="_blank" >add</a></div>
                </div>

            </Form>
        </div>
    )
}
export default Form