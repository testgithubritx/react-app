import React,{useState,useEffect} from 'react'
import axios from 'axios'

const API='https://jsonplaceholder.typicode.com/post'

const DataGetMethodasyncawait4=()=>{
    const[show,setShow]=useState([])
   

    useEffect(()=>{
        handleGetData()
    })

    const handleGetData=async()=>{
        try{
            const scs=await axios.get(API)
            setShow(scs.data)
        }
        catch(err){
            alert(err.message)
        }

    }
    
    return(
        <>
        <center>
            <h2>THis is DataGetMethodasyncawait</h2>
            <ul>
                {show.map((e)=>{
                    return <li key={e.id}>{e.title}</li>
                })}
            </ul>
        </center>
        </>
    )
}
export default DataGetMethodasyncawait4;