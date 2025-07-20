import React from 'react'
import Child_One from './Child_One'
import Child_Two from './Child_Two'

function Parent() {
  return (
    <div>
      <h1>Parent</h1>
      <hr />
      <Child_One />
      <hr />
      <Child_Two />
      <hr />

    </div>
  )
}

export default Parent
