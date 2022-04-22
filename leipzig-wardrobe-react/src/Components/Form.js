import React from "react";

const Form = props => {
    const updateWorkshop = event => {
        event.preventDefault();

        let newWorkshop = {
            id: (props.workshops.length + 1).toString(),
            name: props.name
        }
        props.update(newWorkshop)
    }

    const updateNewName = event => {
        props.updateName(event.target.value);
    }

    return (
        <div>
            <Form  onSubmit={updateWorkshop}>
                <h2>Add new workshop! (form.js)</h2>
                <div className="form_div">
                    <input placeholder="Enter name" value={props.name}onChange={updateNewName} />
                </div>
                <div className="form_div">
                    <div className="button"><a target="_blank" >add</a></div>
                </div>

            </Form>
        </div>
    )
}
export default Form