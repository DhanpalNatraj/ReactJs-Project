import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UpparCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text Converted to UpperCase","success");
    }
    const handleLowClick = ()=>{
        // console.log("LowerCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text Converted to LowerCase","Success");
    }
    const handleClearText = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange = (event)=>{
        console.log("OnChange");
        setText(event.target.value)
    }
     
    const handleCopy = ()=> {
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied to clipboard","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success");
    }


    const[text, setText] = useState('Enter Text Here');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'dark'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" id="MyBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='#173b6e'?'gray':'white',color: props.mode==='#173b6e'?'white':'#173b6e'}}
         rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear textbox</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy textbox</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'dark', }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
        <p>{0.008/60*100 * text.split(" ").filter((element)=>{return element.length!==0}).length} minuts take to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the text box to preview it"}</p>
    </div>
    </>

  )
}
