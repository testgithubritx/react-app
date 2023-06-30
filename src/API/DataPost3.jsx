import React from 'react'
import axios from 'axios'
const API='https://jsonplaceholder.typicode.com/users'

const DataPost3=()=>{
    const handleChange=()=>{
        axios.post(API,{
            Name:"kartick",
            username:'kartick debnath',
            email:'k@gmail.com'
        })
        .then((scs)=>{
            console.log(scs.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    return(
        <>
        <h1>This is Data Post</h1>
        <button onClick={handleChange}>Show</button>
        </>
    )
}
export default DataPost3;