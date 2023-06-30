import React,{useState,useEffect} from 'react'
import axios from 'axios'
const API='https://jsonplaceholder.typicode.com/users/4'

const DataDeleteMethod4=()=>{
    const[show,setShow]=useState([])
    useEffect(()=>{
        axios.get(API)
        .then(scs=>setShow(scs.data))
    },[])
    const handleChange=()=>{
       axios.delete(API)
       .then(scs=>setShow(scs.data))
    }
    return(
        <>
        <center>
            <h1>This is Data Delete Method</h1>
            Name:{show.name}
            <br/>
            Email:{show.email}<br/>
            Phone:{show.phone}<br/>
            <button onClick={handleChange}>Submit</button>

        </center>
        </>
    )
}
export default DataDeleteMethod4