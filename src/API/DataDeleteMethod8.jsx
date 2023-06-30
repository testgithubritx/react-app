import React,{useEffect,useState} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users/5'

const DataDeleteMethod8=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get(API)
        .then(scs=>setData(scs.data))
        .catch(err=>alert('invalid'))
    },[])
    const handleSubmit=()=>{
        axios.delete(API)
        .then(scs=>setData(scs.data))
    }
    return(
        <>
        <center>
            <h1>This is data delete</h1>
            ID:{data.id}<br/>
            Name:{data.name}<br/>
            User Name:{data.username}<br/>
            Email:{data.email}<br/>
            <button onClick={handleSubmit}>submit</button>
        </center>
        </>
    )
}
export default DataDeleteMethod8