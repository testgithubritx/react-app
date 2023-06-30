import React,{useState,useEffect} from 'react'
import axios from 'axios'
const API='https://jsonplaceholder.typicode.com/users/8'

const DataDelete3=()=>{
    const [show,setShow]=useState([]);

     useEffect(()=>{
        axios.get(API)
        .then(scs=>setShow(scs.data))
    },[])
    const handleDelete=()=>{
        axios.delete(API)
        .then(scs=>setShow(scs.data))
    }
    return(
        <>
        <h1>This is Data Delete</h1>
        Name:-{show.name} <br/>
        Email:-{show.email} <br/>
        Phone:-{show.phone} <br/>
        <button onClick={handleDelete}>Delete Data</button>
        </>
    )
}
export default DataDelete3