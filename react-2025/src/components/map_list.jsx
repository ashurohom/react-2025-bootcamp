import React from 'react'

// function Map_list() {
//     const names = ["Ashu","Soham","Vraj",]
//   return (
//     // <div>
//     //   <h3>{names[0]}</h3>
//     //   <h3>{names[1]}</h3>
//     //   <h3>{names[2]}</h3>
//     // </div>
//   )
// }
// export default Map_list

function Map_list() {
    const names = ["Ashu","Soham","Vraj",]
    const nameList = names.map(name => <h3>{name}</h3>)
  return(<div>{nameList}</div>)
}
export default Map_list
