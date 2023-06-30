import React,{useState} from 'react'

const UseState=()=>{
    const [update,setUpdate]=useState(0)

    const handleUpdate=()=>{
        setUpdate(update+5)
    }
    const handleDelete=()=>{
        setUpdate(update-1)
    }
    const handleReset=()=>{
        setUpdate(0)
    }
    return(
        <>
        <center>
        <h1>This is UseState</h1>
        {update}<br/>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleReset}>Reset</button>
        </center>
        </>
    )
}
export default UseState;