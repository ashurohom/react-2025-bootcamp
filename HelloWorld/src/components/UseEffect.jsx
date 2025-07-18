import React from 'react'
import { useState, useEffect } from 'react'

function UseEffect() {

    const[count, setCount] = useState(0)

    useEffect(() => {
        console.log("UseEffect is Running");
        document.title = `you clicked ${count} times`;
        
    },[count]);

  return (
    <div>
      <h3>You Clicked {count} Times</h3>
      <button onClick={() => setCount(count + 1)}> Click Me</button>
    </div>
  )
}

export default UseEffect
