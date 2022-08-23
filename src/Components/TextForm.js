import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState("");
  
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  }

  const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleClearClick = (event)=>{
    let newText = ("");
    setText(newText);
    props.showAlert("Clear all text", "success")
  }
  
  return (
    <>
    <div className="container my-3">
      <h1 style={{marginBottom:'16px'}}>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowerrcase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container">
      <h2>Your text summary</h2>
      <p>words {text.split(/\s+/).filter((element) => {return element !== "";}).length} and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element) => {return element !== "";}).length} Minuts read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  )
}
