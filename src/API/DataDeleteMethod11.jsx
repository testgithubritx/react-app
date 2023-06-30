import React,{useEffect,useState} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users/7';

const DataDeleteMethod11=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
      axios.get(API)
      .then(scs=>setData(scs.data))
    },[])
    const handleSubmit=()=>{
        axios.delete(API)
        .then(scs=>setData(scs.data))
    }
    return(
        <>
        <center>
            <h1>This is data delete 11</h1>
            Name:{data.name}<br/>
            User Name:{data.username}<br/>
            Email:{data.email}<br/>
            <button onClick={handleSubmit}>Submit</button>
        </center>
        </>
    )
}
export default DataDeleteMethod11;