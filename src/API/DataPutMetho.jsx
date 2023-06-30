import React,{useState,useEffect} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users/4'

const DataPutMetho=()=>{
    const[show,setShow]=useState([])

    useEffect(()=>{
        axios.get(API)
        .then(scs=>setShow(scs.data))
        .catch(err=>setShow(err.message))
    },[])

    const handleChange=()=>{
        axios.put(API,{
            name:'Kartick',
            email:'k@gmail.com'
           })
        .then(scs=>setShow(scs.data))
    }


  return(
    <>
    <center>
        <h1>This is Data Put Method</h1>
        id:{show.id}<br/>
        Name:{show.name}<br/>
        Email:{show.email}<br/>
        
        <button onClick={handleChange}>Submit</button>
    </center>
    </>
  )
} 
export default DataPutMetho