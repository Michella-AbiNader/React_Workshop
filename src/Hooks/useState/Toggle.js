import React, { useState } from 'react'

function Toggle() {
    const [isText, setIsText] = useState(false)
  return (
    <div>
        <p>
            {isText? "Hello World" : "Goodbye World"}
        </p>
        <button onClick={() => setIsText(!isText)}>Change Text</button>
    </div>
  )
}

export default Toggle

export function Toggle2(){
  const [text, setText] = useState("")
  const handleChange = (event) =>{
    setText(event.targe.value)
  }
  return(
    <div>
      <h1>Toggle2</h1>
      <p>{text}</p>
      <input value={text} type="text" placeholder="Enter Text" onChange={handleChange}/>
    </div>
  )
}

export function Toggle3(){
    const [text, setText] = useState('')
    const [inputValue, setInputValue] = useState({
        textInput: ""
    })
    function handleTextChange(e){
        e.preventDefault();
        setInputValue({...inputValue,[e.target.name]: e.target.value})//textInput instead of [e.target.name]
    }
    const handleFormSubmission = (e) =>{
        e.preventDefault();
        setText(inputValue.textInput)
    }
    return(
        <div>
            <h1>Toggle3</h1>
            <p>{text}</p>
            <form onSubmit={handleFormSubmission}>
                <input name='textInput' type='text'onChange={handleTextChange}/>
                <button type = "submit"> 
                    Change Text
                </button>
            </form>
            
        </div>
    )
}