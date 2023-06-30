import React,{useState,useEffect} from 'react'
import axios from 'axios'
const API='https://jsonplaceholder.typicode.com/users/5';

const DataPut3=()=>{
    const [data,setData]=useState([])

    useEffect(()=>{     //data fatching
        axios.get(API)
        .then(scs=>setData(scs.data))
        .catch(err=>console.log(err.message))
    },[])

    const handleUpdate=()=>{
       axios.put(API,{
        name:'kartick',
        username:'debnath',
        email:'k@gmail.com'

       })
       .then(scs=>setData(scs.data))
       
    }
    return(
        <>
        <h1>This is data put method</h1>
        Id:-{data.id} <br/>
        Name:-{data.name} <br/>
        UserName:-{data.username} <br/>
        Email:-{data.email} <br/>
        <button onClick={handleUpdate}>Update Data</button>
        </>
    )
}
export default DataPut3;