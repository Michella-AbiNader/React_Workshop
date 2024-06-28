import React, {useRef, useEffect} from 'react'
//used to stop a rendering for example
function Example1() {
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    }, [])
  return (
    <div>
        <h2>Example 1</h2>
        <input type ='text' placeholder = 'without useRef'/>
        <br/>
        <input ref={inputRef} type ='text' placeholder = 'with useRef'/>
        <p>Start typing</p>
    </div>
  )
}

export default Example1