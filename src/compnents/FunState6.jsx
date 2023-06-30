import React,{useState} from 'react'

const FunState6=()=>{
    const[change,setChange]=useState('js')
    const[update,setUpdate]=useState(0)

    const handleChange=()=>{
        setChange('recatjs')
    }

    const handleUpdate=()=>{
        setUpdate(update+5)
    }
    return(
        <>
        <center>
            <h1>This is Fun State</h1>
            <h2>{change}</h2>
            <h2>{update}</h2>
            <button onClick={handleChange}>Change</button>
            <button onClick={handleUpdate}>Update</button>
        </center>
        </>
    )
}
export default FunState6