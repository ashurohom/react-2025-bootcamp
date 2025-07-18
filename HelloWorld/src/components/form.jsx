import React from 'react'
import { useState } from 'react'

function Form() {
    const [name, setName] = useState('')

    const handelChange = (event) => {
        setName(event.target.value)
    };

  return (
    <div>
      
    </div>
  )
}

export default Form
