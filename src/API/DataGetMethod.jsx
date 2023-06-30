import React, {useState,useEffect} from 'react';
import axios from 'axios';

const API="https://jsonplaceholder.typicode.com/posts";

//using promise

const DataGetMethod=()=>{
    const [value,setValue]=useState([]);

    const handleGetData =()=>{
         axios.get(API)
         .then((res)=>{   //true value
            setValue(res.data);
         })
         .catch((err)=>{
            alert(err.message);
         })
    }
    useEffect(()=>{
      handleGetData();
    },[])
    return(
        <>
        <h2>Example of GET Method using Axios</h2>
        {/* <button onClick={handleGetData}>Show</button> */}
        <ul>
          {value.slice(0,20).map((e,i)=>{
            const {id,title}=e;  //destructring
            return <li key={id}>{title}</li>
          })}
        </ul>
        </>
    )
}
export default DataGetMethod;