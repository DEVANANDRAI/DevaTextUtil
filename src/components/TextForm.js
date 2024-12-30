import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("")
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [output,setOutput]=useState("None")
    const CountCharacter=()=>{
        props.changeAlert("Checked Number of Character","NUMBER OF CHARACTER","primary");
        const noOfCharacter=text.length;
        setOutput(noOfCharacter);
    }
    const CountOfWord=()=>{ 
        props.changeAlert("Checked Number of word","NUMBER OF WORD","secondary");
        const count = (text) => text.trim().split(/\s+/).length;
        setOutput(count(text));
    }
    const makeCapitalize=()=>{
        setOutput(text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()));
        props.changeAlert("Your Text are converted into Capitalize form","CAPITALIZATION","success");
    }
    const removeExtraSpaces=()=>{
        props.changeAlert("Extra space removed successfully","REMOVAL EXTRA SPACE","danger");
        setOutput(text.split(" ").join(" "));
    }
    const makeInCaps=()=>{
        setOutput(text.toUpperCase());
        props.changeAlert("Your Whole text has been converted in Capital letter.","CAPS FORM","warning");
    }
    const makeInSmall=()=>{
        props.changeAlert("Your Whole text has been converted in small letter","SMALL FORM","info");
        setOutput(text.toLowerCase());
    }
    const clearBox=()=>{
        props.changeAlert("Text cleared successfully","Cleared Text","secondary");
        setText("");
    }
  return (
<>
    <div className="row">
     <div className="col-sm-12 mt-1 mb-2">  
     <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={clearBox} id="flexSwitchCheckChecked"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">{text===""?"Write Something in the Box":"Clear Box"}</label>
</div>  
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} placeholder="write something Here.........." onChange={handleOnChange} style={props.inputMode}></textarea>
     </div>
     <h3>Result:</h3><p>{output}</p>
    </div>
    <div className="row">
        <div className="col-sm-2 ps-3">
        <button type="button" className="btn btn-primary" onClick={CountCharacter}>Count Character</button>
        </div>
        <div className="col-sm-2">
        <button type="button" className="btn btn-secondary" onClick={CountOfWord}>Count No.Of Word</button>
        </div>
        <div className="col-sm-2 ps-auto">
        <button type="button" className="btn btn-success" onClick={makeCapitalize}>Capitalize The Text</button>
 
        </div>
        <div className="col-sm-2">
        <button type="button" className="btn btn-danger" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="col-sm-2">
        <button type="button" className="btn btn-warning" onClick={makeInCaps}>Make In Capital Letter</button>
        </div>
        <div className="col-sm-2 mb-4">
        <button type="button" className="btn btn-info" onClick={makeInSmall}>Write in Small Letter</button> 
        </div>
    
    </div>
</>  
  )
}
