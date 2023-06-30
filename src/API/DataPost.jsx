import React from 'react';
import axios from 'axios';

const API='https://jsonplaceholder.typicode.com/users';

const DataPost=()=>{
    const handleChange=()=>{
    axios.post(API,{
        name:'kartck',
        username:'reactjs',
        email:'kartick@gmail.com'
    })
    .then(scs=>console.log(scs.data))
    .catch(err=>console.log(err.message))
}
    return(
        <>
        <center>
            <h1>DATA POST</h1>
            <button onClick={handleChange}>Create Data</button>
        </center>
        </>
    )
}
export default DataPost;