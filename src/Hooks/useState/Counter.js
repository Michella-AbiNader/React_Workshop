import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h2>Counter</h2>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count+1)} >Click ME!</button>

    </div>
  )
}

export default Counter

function Counter2(){
    const [count, setCount] = useState(0);
    const handleAddition = () =>{
        setCount(count+1)
    }
    return(
        <div>
        <h2>Counter</h2>
        <p>You clicked {count} times</p>
        <button onClick={handleAddition} >Click ME!</button>

    </div>
    )
}

function Counter3(){
    const [count, setCount] = useState(0);
const handleAddition = () =>{
        setCount((count)=> count+1)
        setCount((count)=> count+1)
        setCount((count)=> count+1)
        setCount((count)=> count+1)

    }
    return(
        <div>
        <h2>Counter</h2>
        <p>You clicked {count} times</p>
        <button onClick={handleAddition} >Click ME!</button>

    </div>
    )
}

export {Counter2, Counter3};
