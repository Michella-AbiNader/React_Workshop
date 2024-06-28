import React from 'react'
import Counter, {Counter2, Counter3} from '../Hooks/useState/Counter'
import Toggle, {Toggle2, Toggle3} from '../Hooks/useState/Toggle'

function UseState() {
  return (
    <div>
        <Counter/>
        <Counter2/>
        <Counter3/>
        <Toggle/>
        <Toggle2/>
        <Toggle3/>
    </div>
  )
}

export default UseState