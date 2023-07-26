import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("");
    const handleUpClick = () => {
        // console.log("cliuds");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        // console.log("cliuds");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        setText("");
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className='container'>

                <div className="mb-3">
                    <textarea className="form-control" onChange={handleChange} id="myBox" rows="3" value={text}></textarea>
                </div>
                <button type="button" className="btn btn-primary m-2 my-1" onClick={handleUpClick} aria-label="Close">Convert to Upercase</button>
                <button type="button" className="btn btn-primary m-2 my-1" onClick={handleLowClick} aria-label="Close">Convert to Lowercase</button>
                <button type="button" className="btn btn-primary m-2 my-1" onClick={handleClearClick} aria-label="Close">Clear Text</button>
            </div>
            <div className='container'>
                <h1>Your text summary </h1>
                <p>{(text.split(" ").filter((element)=>{return element.length !== 0}).length)} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} minutes read.</p>
            </div>
            <div className='container'>
                <h1>Preview </h1>
                <p>{text}</p>
            </div>


        </>
    )
}
