import React,{useState} from 'react';

const Logic=()=>{
    const [ value, setValue]=useState(0);
    
    const handleSubmit=()=>{
        setValue(value+5)
    }
    const handleDelete=()=>{
        setValue(value-1);
    }
    const handleReset=()=>{
        setValue(0)
    }

    return(
        <>
        VALUE IS:-{value}<br/>
        <button onClick={handleSubmit}>Update</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default Logic;