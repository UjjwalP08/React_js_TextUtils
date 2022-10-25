import React, { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState("Enter Your Text Here");

    const changetoUP = () => {
        // console.log("Your text is " + text);
        let newText = text.toUpperCase();
        setText(newText);
    };
    const changetoLw = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    const reset = () => {
        setText("Enter Your Text Here");
    };

    // when we handle the onChang
    // e event we get the event listner that we use in changeTo function
    const changeTo = (event) => {
        // console.log("Onchange Event is fire");
        setText(event.target.value);
        // This command is use when we want to inset extra text in our textarea
        // simple word conctanate the text
    };
    return (
        <>
            <div>
                <h1> {props.heading} </h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={changeTo}
                        id="myBoss"
                        rows="8"
                    ></textarea>
                </div>
                <button type="button" onClick={changetoUP} className="btn btn-primary">
                    Uppercase
                </button>
                <button type="button" onClick={changetoLw} className="btn btn-primary mx-2">
                    Lowercase
                </button>
                <button type="button" onClick={reset} className="btn btn-danger mx-2">
                    Reset
                </button>
            </div>

            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>

                    {text.split(" ").length} words and {text.length} characters{" "}
                </p>
                <p>
                    {0.008 * text.split(" ").length} minitues to read
                </p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
