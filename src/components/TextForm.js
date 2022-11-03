import React, { useState } from "react";

export default function TextForm(props) {


    const handleonchange=(event)=>{
        setText(event.target.value)
    }
    const HandleupClick=()=>{
        console.log("Uppercase was Clicked"+Text);
        let newText=Text.toUpperCase();

        setText(newText);
    }
    const [Text, setText] = useState("Enter the Text here2");
    //Text="sdksdjcm " // wrong way to change the state
    //setText("new text")// correct way
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={Text}
                    onChange={handleonchange}
                    id="mybox"
                    rows={8}
                    defaultValue={""} 
                />
            </div>
            <button className="btn btn-primary" onClick={HandleupClick}>Convert to uppercase</button>
        </div>
    );
}
