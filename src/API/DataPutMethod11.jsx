import React,{useEffect,useState} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users/6';

const DataPutMethod11=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
      axios.get(API)
      .then(scs=>setData(scs.data))
    },[])
    const handleSubmit=()=>{
        axios.put(API,{
            name:'kartick',
            username:'debnath',
            email:'k@gmail.com'
        })
        .then(scs=>setData(scs.data))
    }
    return(
        <>
        <center>
            <h1>This is data put 11</h1>
            Name:{data.name}<br/>
            User Name:{data.username}<br/>
            Email:{data.email}<br/>
            <button onClick={handleSubmit}>Submit</button>
        </center>
        </>
    )
}
export default DataPutMethod11;