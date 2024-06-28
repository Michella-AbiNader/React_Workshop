import React, {useRef, useState, useEffect} from 'react'

function Example2() {
    const boxRef = useRef(null)
    const [boxWidth, setBoxWidth] = useState(0)

    useEffect(()=>{
        const width = boxRef.current.clientWidth//checks the size of the div
        setBoxWidth(width)
    }, [])
  return (
    <div>
        <h2>Example 2</h2>
        <div ref={boxRef} style={{width:"50%", backgroundColor:"lightblue",padding:"20px"}}>
            This is a resizable box
            </div>
        <p>Box width: {boxWidth}</p>
    </div>
  )
}

export default Example2