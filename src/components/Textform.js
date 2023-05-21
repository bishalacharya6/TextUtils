import React, { useState } from "react";

export default function Textform(props) {
  const handleUpUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleUpLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const [text, setText] = useState("");

  return (
    <div
      className="container mx-6 my-3"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h3>Enter Text to Analyze </h3>
      <div>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#c7f8ed" : "white",
            border: "3px solid black",
          }}
        ></textarea>
      </div>
      <div>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-3"
          onClick={handleUpUpper}
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3 my-1"
          onClick={handleUpLower}
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-2 my-1 "
          onClick={handleSpace}
        >
          Remove Spaces
        </button>
      </div>

      <h2>Your Text Summary</h2>

      <p>
        Word Count:{" "}
        {
          text.split(/\s/).filter((element) => {
            return element.length !== 0;
          }).length
        }{" "}
        &emsp; Characters: {text.length} &emsp; Reading Time:{" "}
        {(
          0.005 *
          text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length
        ).toFixed(2)}{" "}
        Minute
      </p>

      <h5>Preview</h5>
      <p>{text.length > 0 ? text : "Write Something in TextBox"}</p>
    </div>
  );
}
