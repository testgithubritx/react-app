import React,{useState} from 'react'
import axios from 'axios'
const API='https://jsonplaceholder.typicode.com/users'

const DataPostDynamic3=()=>{
    const [name,setName]=useState('')

    const handleChange=(e)=>{
        setName(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(API,{name})
        .then((scs)=>{
            console.log(scs.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    return(
        <>
        <h1>Data Post Dynamic</h1>
        <form onSubmit={handleSubmit}>
            Name:-<input type='text' onChange={handleChange}/><br/><br/>
            <button>Create Post</button>
        </form>
        </>
    )
}
export default DataPostDynamic3