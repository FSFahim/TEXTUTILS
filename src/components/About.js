import React, { useState } from "react";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color:"black",
    backgroundColor:"white"
  })
  return (
    <div className="container" style={{color:props.mode ==="light"?"black":"white"}}>
      <h2>{props.title}</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor:props.mode ==="light"?"white":"grey", color:props.mode ==="light"?"black":"white"}}
            >
            <strong>Analyze your text</strong>              
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode ==="light"?"white":"#d3d4d5", color:props.mode ==="black"}}>
            TextUtils gives you a way to analyze your text quickly and effectively. It provides you text preview, word and character count.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor:props.mode ==="light"?"white":"grey", color:props.mode ==="light"?"black":"white"}}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode ==="light"?"white":"#d3d4d5", color:props.mode ==="black"}}>
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TexUtils reports the number of words and characters. thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor:props.mode ==="light"?"white":"grey", color:props.mode ==="light"?"black":"white"}}
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode ==="light"?"white":"#d3d4d5", color:props.mode ==="black"}}>
              This word counter application works in any web browsers such as Chrome, Firefox, Microsoft Edge, Safari, Opera etc. It suits to count characters and words in facebook, blogs, books, excel document, pdf, essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
