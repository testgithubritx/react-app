import React,{useState} from 'react'

const UseState4=()=>{
    const [data,setData]=useState('JS')
    const[change,setChange]=useState(0)
    
    const handleChange=()=>{
        setData('Reactjs')
    }
    const handleUpdate=()=>{
        setChange(change+5)
    }
    const handleDelete=()=>{
        setChange(change-1)
    }
   const handleReset=()=>{
    setChange(0)
   }
    return(
        <>
        <center>
        <h1>This is UseState4</h1>
        {data}<br/>
        <button onClick={handleChange}>Change</button> <br/><br/>
        {change}<br/> 
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>   
        <button onClick={handleReset}>Reset</button>   
        </center>
        </>
    )
}
export default UseState4