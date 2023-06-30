import React,{useState,useEffect} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/posts'

const DataGetMethod4Promise=()=>{
    const[value,setValue]=useState([])

    const handleGetData=()=>{
        axios.get(API)
        .then((scs)=>{
            setValue(scs.data)
        })
        .catch((rej)=>{
            alert(rej.message)
        })
    }

        useEffect(()=>{
            handleGetData();
        },[])
    
    return(
        <>
        <center>
        <h2>Data get method from promise</h2>
        <ul>
            {value.map((e)=>{
                return <li key={e.id}>{e.title}</li>
            })}
        </ul>
        </center>
        </>
    )
}
export default DataGetMethod4Promise;