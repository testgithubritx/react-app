import React ,{useState, useEffect} from 'react';
import axios from 'axios';

const API='https://jsonplaceholder.typicode.com/users/5';

const DataPut=()=>{
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get(API)
        .then(scs=>setData(scs.data))
        .catch(err=>console.log(err.message))
    },[])
    const handleUpdate=()=>{
        axios.put(API,{
            username:'kartick',
            email:'kartick@gmail.com'
        })
        .then(scs=>setData(scs.data))
    }
    return(
        <>
        <center>
            <h1>DATA PUT</h1>
            ID:-{data.id}
            <br/>
            User Name:- {data.username}
            <br/>
            Email :- {data.email}
            <br/>
            <button onClick={handleUpdate}>Update Data</button>
        </center>
        </>
    )
}
export default DataPut;