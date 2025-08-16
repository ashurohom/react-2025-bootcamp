import { useState } from 'react'
import Child_One from './Child_One'
import Child_Two from './Child_Two'
import { Link } from 'react-router-dom'

function Parent() {
        const [user, setUser] = useState('')
  return (
    <div>
    <Link to="/"><h3>Parent</h3></Link>
    <Link to="/Hello"><h3>Hello</h3></Link> 
    <Link to="/Fetch_API"><h3>Fetch_API</h3></Link> 
    
      <h1>Parent</h1>
      <Child_One setUser={setUser}/>
      <Child_Two user={user}/>
    </div>


  )
}
export default Parent;
