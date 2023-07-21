import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState("");
    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleLowClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleRemoveExtraSpaces = () => {
        let newText = text.trim();
        newText = newText.split(/[ ]+/);
        newText = newText.join(" ");
        setText(newText)
        props.showAlert("Extra Spaces Removed!", "success")
    }
    const handleClearText = () => {
        setText("")
        props.showAlert("Text Cleared!", "success")
    }
    const handleCopyToClipboard = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")
    }
    let word,wordCount,character,characterCount;
    wordCount = text.split(" ").filter((element) => {return element.length!==0}).length;
    characterCount = text.length;
    if(wordCount!==1){
        word = "words";
    }else{
        word = "word";
    }
    if(characterCount!==1){
        character = "characters";
    }else{
        character = "character";
    }
    return (
        <>
        <div className='container' style={{color:props.mode ==="light"?"black":"white"}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode ==="light"?"white":"grey", color:props.mode ==="light"?"black":"white"}} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.mode ==="light"?"secondary":"light"} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-${props.mode ==="light"?"secondary":"light"} mx-1 my-1`} onClick={handleLowClick}>Convert to Lowercase</button>
            <button className={`btn btn-${props.mode ==="light"?"secondary":"light"} mx-1 my-1`} onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            <button className={`btn btn-${props.mode ==="light"?"secondary":"light"} mx-1 my-1`} onClick={handleCopyToClipboard}>Copy to Clipboard</button>
            <button className={`btn btn-${props.mode ==="light"?"secondary":"light"} mx-1 my-1`} onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="container my-5" style={{color:props.mode ==="light"?"black":"white"}}>
            <h3>Your text summary:</h3>
            <p>{wordCount} {word} {characterCount} {character}</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
