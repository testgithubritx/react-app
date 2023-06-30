import React from 'react'
import axios from './axios'

const DataGet3=()=>{
    const handle=()=>{
        axios.get('users')
        .then(res=>console.log(res.data))
    }
    return(
        <>
        <h1>This is data get</h1>
        <button onClick={handle}>Show</button>
        </>
    )
}
export default DataGet3;