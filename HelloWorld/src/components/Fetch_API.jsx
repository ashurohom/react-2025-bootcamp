import React, { useState, useEffect } from 'react'

function Fetch_API() {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchdata = async () =>{
            const res = await fetch('')
        }
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default Fetch_API
