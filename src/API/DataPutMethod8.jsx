import React,{useState,useEffect} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users/6'

const DataPutMethod8=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get(API)
        .then(scs=>setData(scs.data))
        .catch(err=>alert('invalid'))
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
            <h1>This is data put 8</h1>
           
                ID:{data.id}<br/>
                Name:{data.name}<br/>
                UserName:{data.username}<br/>
                Email:{data.email}<br/>
                <button onClick={handleSubmit}>submit</button>
          
            
        </center>
        </>
    )
}
export default DataPutMethod8;