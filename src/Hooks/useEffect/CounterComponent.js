import React, { useEffect, useState } from 'react'
//used when i want an action to happen on render
function CounterComponent() {
    const [count, setCount] = useState(0);
    useEffect( ()=>{
        document.title = `Count: ${count}`
        console.log(`Count has been updated to ${count}`)
    })
  return (
    <div>
        <h1>CounterComponent</h1>
        Count: {count}
        <button onClick={() =>{ setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default CounterComponent