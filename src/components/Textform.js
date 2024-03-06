import React,{useState} from 'react'

export default function Textform(props) {
  const[text,setText]=useState('');//the value of text s set to 'Enter text here'
  // function capitalize(word){
  //   var lower= word.toLowerCase();
  //   return lower.charAt(0).toUpperCase()+ lower.slice(1);
  // }
 function handleaClick(){
  
//  props.al("converted to upper case","secondary");
if(text.trim()===''){
 
  props.al("please enter the text","danger");

}
else{
  setText(text.toUpperCase());
  props.al("converted to upper case","success");
}
 
 }
 function handlebClick(){
  if(text.trim()!==''){
  setText(text.toLowerCase());
  props.al("converted to lower case","success")
  }
  else{
    props.al("please enter a text","danger"); 
  }
 }
  function handleaChange(event){
    setText(event.target.value);
  }
  function handleCopy(){
      if(text.trim()!==''){
      navigator.clipboard.writeText(text);
      props.al("copied text!","primary")
      }
      else{
        props.al("nothing to copy","danger");
      }
  }
  function handleSpaces(){
    if(text.trim()!==''){
    var spaced=text.split(/\s+/);
    var result=spaced.join(' ');
    setText(result);
    props.al("removed extra spaces");
    }
    else{
      props.al("nothing to remove","danger");
    }
  }
  function handleClear(){
    if(text.trim()!==''){
    setText("");
    props.al("Cleared","primary");
  }
  else{
    props.al("enter a text","danger");
  }
}
  
  return (
    <>
    <div className="main">
    <h1>{props.heading}</h1>
<div className="mb-3">
  {<textarea className={`form-control text-${props.tcolor}`} value={text} onChange={handleaChange} id="mybox" rows="8" ></textarea> /*The value of text is assigned in text area in the attr of value */}
  <button className="btn btn-danger my-3 mx-3" onClick={handleaClick}>Convert To Upper Case</button>
  <button className="btn btn-danger my -3 mx-3 " onClick={handlebClick}>Convert To Lower Case</button>
  <button className="btn btn-danger my-3 mx-3" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-danger my-3 mx-3" onClick={handleSpaces}>Remove Extra Spaces</button>
  <button className="btn btn-danger my-3 mx-3" onClick={handleClear}>Clear Text</button>
  
</div>
<div className="conatiner my-3">
  <h1>{props.char}</h1>
  <p>Your text contains {text.split(/\s+/).length-1} number of words and {text.replace(/\s/g, '').length} number of characters.</p>
  <p>{.008*(text.split(/\s+/).length-1)} to read this text</p>
</div>
</div>
</>
  
  )
}
Textform.defaultProps={
  heading:'Enter a text to analyze below',
  char:"Your text summary"
}