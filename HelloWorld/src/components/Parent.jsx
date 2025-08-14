import { useState } from 'react'
import Child_One from './Child_One'
import Child_Two from './Child_Two'
import { Link } from 'react-router-dom'

function Parent() {
        const [user, setUser] = useState('')
  return (
    <div>
    <Link to="/">Parent</Link>
    <Link to="/Hello">Hello</Link>
    <Link to="/Props">Props</Link>
    
      <h1>Parent</h1>
      <Child_One setUser={setUser}/>
      <Child_Two user={user}/>
    </div>


  )
}
export default Parent;
