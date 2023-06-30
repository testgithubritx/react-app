import React,{useState,useEffect} from 'react'

const UseEffect9=()=>{
    const[count,setCount]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setCount(count+10)
        },1000)
    })
    return(
        <>
        <center>
            <h1>This is use effect</h1>
            <h2>{count}</h2>
        </center>
        </>
    )
}
export default UseEffect9;