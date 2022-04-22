import React from "react"


const FormRegister = () => {

    return(
        <div className="divFormReg">
            <form className="formReg">
                <h2>Register for a workshop (formRegister.js)</h2>
                <div>
                    <label htmlFor="user_name">Name:</label>
                    <input id="user_name" name="user_name" />
                </div>
                
                <div>
                    <label htmlFor="age">Age:</label>
                    <input id="age" name="age" type="number"/>
                </div>
                
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea id="comment" name="comment"></textarea>
                </div>

                <div>
                    <label htmlFor="gender" name="gender">Gender</label>
                    <select id="gender" name="gender">
                        <option value="female">Female</option>
                        <option value="male">male</option>       
                        <option value="kangaroo">Kangaroo</option>           
                    </select>
                </div>

                <div>
                    {/* tues 22nd */}
                </div>
                




            </form>
        </div>
    )
}
export default FormRegister