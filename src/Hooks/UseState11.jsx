// import React from 'react'

// const UseState11=()=>{
//     return(
//         <>
//         <center>
//             <h1>THis is ude state 11</h1>
//         </center>
//         </>
//     )
// }
// export default UseState11

import React,{useState} from 'react'

const UseState11=()=>{
    const[name,setName]=useState('js')
    const[update,setUpdate]=useState(0)
    const handleChangeName=()=>{
        setName('reactjs')
    }
    const handleChangeUpdate=()=>{
        setUpdate(update+5)
    }
    return(
        <>
        <center>
            <h1>THis is ude state 11</h1>
            <h4>{name}</h4>
            <button onClick={handleChangeName}>Change</button>
            <h4>{update}</h4>
            <button onClick={handleChangeUpdate}>Update</button>
        </center>
        </>
    )
}
export default UseState11