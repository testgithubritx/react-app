import React,{useState,useEffect} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/posts'

const DataGetMethodPromise5=()=>{
    const [value,setValue]=useState([])

    const handleGetData=()=>{
    axios.get(API)
    .then((ses)=>{
        setValue(ses.data)
    })
        .catch((err)=>{
            alert(err.message)
        })
    }
    useEffect(()=>{
      handleGetData()
    })
    
    
    return(
        <>
        <center>
            <h2>This is DataGetMethodPromise5</h2>
            <ul>
                {value.map((e)=>{
                    return <li key={e.id}>{e.body}</li>
                })}
            </ul>
        </center>
        </>
    )
}
export default DataGetMethodPromise5