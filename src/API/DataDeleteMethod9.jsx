import React,{useEffect,useState} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/users/8'

const DataDeleteMethod9=()=>{
    const[show,setShow]=useState([])
    useEffect(()=>{
        axios.get(API)
        .then(scs=>setShow(scs.data))
        .catch(err=>alert('invalid'))
    },[])
    const handleClick=()=>{
        axios.delete(API)
        .then(scs=>setShow(scs.data))
    }
    return(
        <>
        <center>
            <h1>This is data delete</h1>
            <table border='1'>
                <tr>
                    <th>ID:{show.id}</th>
                    <th>Name:{show.name}</th>
                    <th>User Name:{show.username}</th>
                    <th>Email:{show.email}</th>
                </tr>
              
            
            </table>
            <button onClick={handleClick}>Submit</button>
               
        </center>
        </>
    )
}
export default DataDeleteMethod9