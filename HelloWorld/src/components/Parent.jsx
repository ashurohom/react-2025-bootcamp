import { useState } from 'react'
import Child_One from './Child_One'
import Child_Two from './Child_Two'

function Parent() {
        const [user, setUser] = useState('')
  return (
    <div>
      <h1>Parent</h1>
      <Child_One setUser={setUser}/>
      <Child_Two user={user}/>
    </div>
  )
}
export default Parent;
