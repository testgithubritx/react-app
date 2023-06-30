import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataGetMethodAsyncAwait3=()=>{
    const [show,setShow]=useState([]);
    const [isoloading,setIsoloading]=useState(true)
    const [err,setErr]=useState('')

    useEffect(()=>{
        handleDataGet();
    },[])

    const handleDataGet = async()=>{
        try{
            const scs= await axios.get('https://jsonplaceholder.typicode.com/users')
            setShow(scs.data)
        }catch(error){
            setErr(error.message)
        }finally{
            setIsoloading(false)
        }
    }
    if(isoloading){
        return <h1>Loading...........</h1>
    }
    if(err){
        return <h1>404 Data Not Found</h1>
    }
    return(
        <>
        <h1>This is example of async await</h1>
        <ul>
            {show.map((e)=>
            <li key={e.id}>{e.name} & {e.email}</li>
            )}
        </ul>
        </>
    )
}
export default DataGetMethodAsyncAwait3;