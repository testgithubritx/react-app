import React,{useState, useEffect} from 'react';
import axios from 'axios'

//access full API and delete dynamically respect id

const API='https://jsonplaceholder.typicode.com/users/8'

const DataDelete=()=>{
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
        <center>
        <h1>DATA DELETE</h1>
        Name:-{show.name}
        <br/>
        Email:-{show.email}
        <br/>
        Phone:-{show.phone}
        <br/>
         <button onClick={handleDelete}>Delete Data</button>
        </center>
        </>
    )
}
export default DataDelete;