import React,{useEffect,useState} from 'react'

const UseEffect12=()=>{
    const[update,setUpdate]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setUpdate(update+5)
        },1000)
    })
    return(
        <>
        <center>
            <h1>This is use effect</h1>
            <h4>{update}</h4>
        </center>
        </>
    )
}
export default UseEffect12