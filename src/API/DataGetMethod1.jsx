import React, {useState,useEffect}from 'react';
import axios from 'axios';

const DataGetMethod1=()=>{
    const [show,setShow]=useState([]);
    const [isoLoading,setIsoLoading]=useState(true);
    const [err,setErr]=useState('');

    useEffect(()=>{
        handleDataGet();
    },[]);

    const handleDataGet=async()=>{
        try{
         const scs =await axios.get('https://jsonplaceholder.typicode.com/users');
         setShow(scs.data);
        }catch(error){
            setErr(error.message);
        }finally{
            setIsoLoading(false)
        }
    };
    if(isoLoading){
        return <h1>LOading............</h1>
    }
    if(err){
        return <p>404 of Data NOt Found</p>
    }

    return(
        <>
        <center>
           <h2> Example of Data Get Method Using Asyns Await</h2>
        </center>
        <ul>
            {show.map((e)=>{
               return  <li key={e.id}>
                    {e.name}&{e.email}
                </li>
         })}
        </ul>
        </>
    )
}
export default DataGetMethod1;