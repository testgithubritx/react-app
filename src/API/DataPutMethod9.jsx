import React,{useEffect,useState} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users/5'

const DataPutMethod9=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get(API)
        .then(scs=>setData(scs.data))
        .catch(err=>alert('invalid'))
    },[])
    const handleClick=()=>{
        axios.put(API,{
           
            name:'kartick',
            username:'debnath',
            email:'k@gmail.com',
        })
        .then(scs=>setData(scs.data))
    }
    return(
        <>
        <center>
            <h1>This is data put</h1>
            Id:{data.id}<br/>
            Name:{data.name}<br/>
            UName:{data.username}<br/>
            Email:{data.email}<br/>
            
                <button onClick={handleClick}>Submit</button>
            
            
               
        </center>
        </>
    )
}
export default DataPutMethod9