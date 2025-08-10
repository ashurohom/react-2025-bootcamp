function Child_One({setUser}) {
  return (
    <div>
      <p>Child One 1</p>
      <input type='text' onChange={(e) => setUser(e.target.value)} placeholder='Enter User'></input>
      <hr />
    </div>
  )
}
export default Child_One
