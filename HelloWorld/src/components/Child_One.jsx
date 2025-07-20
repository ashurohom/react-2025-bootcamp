import React, { useState } from 'react'

function Child_One() {
  return (
    <div>
      <p>Child One {user}</p>
      <input type='text' placeholder='Enter User' onChange={(e) => setUser(e.target.value) }></input>
    </div>
  )
}

export default Child_One
