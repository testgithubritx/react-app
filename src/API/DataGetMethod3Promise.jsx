//api data get method using promisex

import React,{useState,useEffect} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/posts'

const DataGetMethod3Promise=()=>{
    const [value,setValue]=useState([])

    const handleSubmit=()=>{
        axios.get(API)
        .then((res)=>{
            // console.log(res.data)
            setValue(res.data)
        })
        .catch((err)=>{
            // console.log(err)
            alert(err.message)
        })
    }
    useEffect(()=>{
      handleSubmit()
    },[])
    return(
        <>
        <h1>This is Data Get Method in Promise(then,catch)</h1>
        {/* <button onClick={handleSubmit}>Submit</button> */}
        <ol>
            {value.map((e,i)=>{
                return <li key={e.id}>{e.title}</li>
            })}
        </ol>
        </>
    )
}
export default DataGetMethod3Promise;