import React from 'react'
import { useState } from 'react'

function Name() {
    const [name, setName] = useState('')
  return (
    <div>
      <input type='text' placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
    
    <h1>Hello, {name}</h1>
    </div>
  )
}
export default Name
