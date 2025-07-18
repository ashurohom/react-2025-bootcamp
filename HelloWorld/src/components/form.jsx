import React from 'react'
import { useState } from 'react'

function Form() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handelChange = (event) => {
        setName(event.target.value)
    };

    const handelPassword = (e) => {
        setPassword(e.target.value)
    };

  return (
    <div>
        <h2>React Form Example</h2>
        <input type='text' value={name} onChange={handelChange} placeholder='Enter Input'/>
        <input type='password' value={password} onChange={handelPassword} placeholder='Enter Password'/>

        <h3>Input Field Message is : {name}</h3>
        <h3>Password Is : {password}</h3>
      
    </div>
  )
}

export default Form
