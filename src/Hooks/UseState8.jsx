import React,{useState} from 'react'
const UseState8=()=>{
    const[count,setCount]=useState('JS')
    const[update,setUpdate]=useState(0)
    const handleChange=()=>{
        setCount('React')
    }
    const handleUpdate=()=>{
        setUpdate(update+5)
    }
    const handleDelete=()=>{
        setUpdate(update-1)
    }
    return(
        <>
        <center>
        <h1>This is use state</h1>
       <h3>{count}</h3> <br/>
       <button onClick={handleChange}>Change</button><br/>
       <h3>{update}</h3>
       <button onClick={handleUpdate}>Update</button>
       <button onClick={handleDelete}>Delete</button>
       </center>


        </>
    )
}
export default UseState8;