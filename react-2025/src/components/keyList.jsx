import React from 'react'

function keyList() {
    const myList = ["One","Two","Three"];
  return (
    <div>
      <h1>myList</h1>
      <ul>
        {
        myList.map((list,index) =>(
            <li key={index}>{list}</li>
        ))
        } 
      </ul>
    </div>
  );
}

export default keyList
