import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("upercase was clicked");
    console.log("You have clicked on handleUpClick" + text);
    let Newtext = text.toUpperCase();
    setText(Newtext);
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div>
        {/* <h1>{props.heading}</h1> */}
        <div className="container mb-3">
          <label className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn primary" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn primary" onClick={handleLoClick}>
          convert to Lower case
        </button>
      </div>
      <div className="container my-3"></div>
      <h1>Your text summary</h1>
      <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </>
  );
}