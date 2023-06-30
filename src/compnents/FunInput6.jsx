import React,{useState} from 'react'

const FunInput6=()=>{
    const[name,setName]=useState('')

    const handleChangeName=(e)=>{
        setName(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(`${name}`)
    }
   
    return(
        <>
        <center>
        <h1>This is fun input</h1>
        <form onSubmit={handleSubmit}>
            name:<input type='text' value={name} onChange={handleChangeName}/><br/><br/>
            <button >Submit</button>
        </form>
        </center>
        </>
    )
}
export default FunInput6