import React from 'react'
import { useState } from 'react'

function Form() {
    const [name, setName] = useState('')

    const handelChange = (event) => {
        setName(event.target.value)
    };

  return (
    <div>
        <h2>React Form Example</h2>
        <input type='text' value={name} onChange={handelChange} placeholder='Enter Input'/>
        <h3>Input Field Message is : {name}</h3>
      
    </div>
  )
}

export default Form
