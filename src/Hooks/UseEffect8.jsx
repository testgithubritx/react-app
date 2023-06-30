import React,{useState,useEffect} from 'react'
const UseEffect8=()=>{
    const[update,setUpdate]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
          setUpdate(update+5)
        },1000)
        document.title=update+1;
    })
    return(
        <>
        <center>
            <h1>This is UseEffect</h1>
            <h2>{update}</h2>
        </center>
        </>
    )
}
export default UseEffect8