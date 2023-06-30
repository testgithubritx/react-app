import React,{useState} from 'react'

const FunInput8=()=>{
    const[change,setChange]=useState('js')
    const[increment,setIncrement]=useState(0)

    const data=()=>{
        setChange('React')
    }
    const update=()=>{
        setIncrement(increment+5)
    }
    const del=()=>{
        setIncrement(increment-1)
    }
    return(
        <>
        <center>
        <h1>This is fun inpit</h1>
        <h3>{change}</h3>
        <button onClick={data}>change</button><br/><br/>
        <h3>{increment}</h3>
        <button onClick={update}>update</button>
        <button onClick={del}>Delete</button>
      
        </center>
        </>
    )
}
export default FunInput8