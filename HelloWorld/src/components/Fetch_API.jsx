import React, { useState, useEffect } from 'react'

function Fetch_API() {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchdata = async () =>{
            const res = await fetch('https://api.github.com/users')
            const data = await res.json();
        setData(data);
        }
        fetchdata();
    }, []);

  return (
    <div>
      <h2>Github User Data : </h2>
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.login}</li>
        ))}
        </ul>

    </div>
  )
}

export default Fetch_API
