import React,{useState} from 'react';

const UseStateHook1=()=>{
    const [value,setValue]=useState(0)

    const handleChange=()=>{
        setValue(value+5)
    }
    const handleDelete=()=>{
        setValue(value-1)
    }
    const handleReset=()=>{
        setValue(0)
    }
    return(
        <>
        <center>
            <h1>USE STATE</h1>
            <h1>{value}</h1>
            <button onClick={handleChange}>Update</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleReset}>Reset</button>
        </center>

        </>
    )
}
export default UseStateHook1;