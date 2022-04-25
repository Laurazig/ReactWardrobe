import React, { useState, useEffect, createRef } from "react";

const FormRegister = () => {

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [num, setNum] = useState("")
    const [select, setSelect] = useState("")
    const [comment, setComment] = useState("")
    const [newsLetter, setNewsLetter] = useState("")
    const [nameChanged, setNameChanged] = useState(false)
    const [emailChanged, setEmailChanged] = useState(false)
    const [numChanged, setNumChanged] = useState(false)
    const [commentChanged, setCommentChanged] = useState(false)


    const nameErrorDiv = createRef();
    const emailErrorDiv = createRef();
    const numErrorDiv = React.createRef();
    const commentLengthErrorDiv = React.createRef();

    //else does not log
    useEffect(() => {
        if (num.length === 0) {
            console.log("num is empty")
        } else {
            console.log("num has some value")
        }
    })

    const updateData = event => {
        switch (event.target.name) {
            case "user_name":
                setUserName(event.target.value);
                setNameChanged(true);
                break;
            case "user_email":
                setUserEmail(event.target.value);
                setEmailChanged(true);
                break;
            case "num":
                setNum(event.target.value);
                setNumChanged(true);
                break;
            case "select":
                setSelect(event.target.value);
                break;
            case "comment":
                setComment(event.target.value);
                setCommentChanged(true);
                break;
            case "newsLetter":
                setNewsLetter(event.target.value);
                break;
            default:
                break;
        }
    }

    const checkEmailFormat = () => {
        if(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(userEmail)) {
            emailErrorDiv.current.className = "errorNotVisible"
        } else {
            emailErrorDiv.current.className = "errorVisible"
        }
    }

    const checkCommentLength =()=> {
        if (comment.length < 20) {
            commentLengthErrorDiv.current.className = "errorNotVisible"
        } else {
            commentLengthErrorDiv.current.className = "errorVisible"
        }
    }

    // const submitForm = event => {
    //     event.preventDefault();
    //     if ( userName.length)
    // }

    const userData = event => {
        event.preventDefault();
        console.log("userName", userName);
        console.log("num", num);
        console.log("select", select);
        console.log("comment", comment);
        console.log("newsLetter", newsLetter);
        setUserName("");
        setNum("");
        setSelect("");
        setComment("");
        setNewsLetter("");
    }

    const checkNameOnBlur = () => {
        console.log("the name input lost focus")
        console.log(userName.length)
        if (userName.trim().length === 0) {
            nameErrorDiv.current.style.display = "block";
        } else {
            nameErrorDiv.current.style.display = "none";
        }
    }

    return (
        <div className="divFormReg">
            <form className="formReg" onSubmit={userData} >
                <h2>Register for a workshop (formRegister.js)</h2>
                <div>
                    <label htmlFor="user_name">Name:</label>
                    <input id="user_name" name="user_name" onChange={updateData} onBlur={checkNameOnBlur} />
                    <div className="errorVisible" ref={nameErrorDiv}>Please enter your name</div>
                </div>

                <div>
                    <label htmlFor="user_email">Email: </label>
                    <input id="user_email" name="user_email" onChange={updateData} />
                    <div className="errorVisible" ref={emailErrorDiv}>Please enter your correct email</div>

                    
                </div>

                <div>
                    <label htmlFor="num">Number of people:</label>
                    <input id="num" name="num" type="number" onChange={updateData} />
                    <div className={num.length === 0 && numChanged ? "errorVisible" : "errorNotVisible"} >Please state how many people are going</div>
                    <div className={isNaN(num) && numChanged ? "errorVisible" : "errorNotVisible"} >Please enter a number</div>
                    <div className={num < 10 && numChanged ? "errorVisible" : "errorNotVisible"} >No more than 10 participants per workshop</div>
                </div>

                <div>
                    <label htmlFor="select" name="select">Workshop:   </label>
                    <select id="select" name="select" onChange={updateData} value={select}>
                        <option value="vhs">Tailoring basics (VHS)</option>
                        <option value="witt">Alladin trousers (Daniela)</option>
                        <option value="hoodie">Hoodie (Susanne)</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="comment">Comment:   </label>
                    <textarea id="comment" name="comment" onChange={updateData} value={comment}></textarea>
                </div>

                <div>
                    <label>Signup for the newsletter !</label>
                    <input className="radio_input radio_input_right" type="radio" name="news_letter" onChange={updateData} value="yes" />
                    <label className="radio_label">Yes</label>
                    <input className="radio_input radio_input_left" type="radio" name="news_letter" onChange={updateData} value="yes" />
                    {/* why is checked on no?  checked={newsLetter !== "yes"}*/}
                    <label className="radio_label">No</label>
                </div>
                <div className="form_div">
                    <button id="buttonAdd">Submit</button>
                </div>

            </form>
        </div>
    )
}
export default FormRegister