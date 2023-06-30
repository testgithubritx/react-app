import React,{useEffect,useState} from 'react'

const UseEffect11=()=>{
    const[change,setChange]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setChange(change+5)
        },1000)
    })
    return(
        <>
        <center>
            <h1>THis is ude state 11</h1>
            <h4>{change}</h4>
        </center>
        </>
    )
}
export default UseEffect11