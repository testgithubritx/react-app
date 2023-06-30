import React,{ useState } from 'react';
import axios from 'axios'
const API='https://jsonplaceholder.typicode.com/users'
//inpu data post dynamic in  API
const DataPostDynamic=()=>{
    const [name,setName]=useState('');

    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(API,{name})
        .then(scs=>console.log(scs.data))
        .catch(err=>console.log(err.message))
    }
    return(
        <>
        <h1>Add User Dynamic</h1>
        <form onSubmit={handleSubmit}>
            Name:-<input type='text' name='name' onChange={handleChange}/>
            <br/>
            <button type='submit'>Create Post</button>
        </form>
        </>
    )
}
export default DataPostDynamic;