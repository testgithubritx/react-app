import React,{useEffect,useState} from 'react';

const UseEffect1=()=>{
    const [count,setCount]=useState(0)

    useEffect(()=>{
    
        setInterval(()=>{
            setCount(count+5)
        },2000)
    })
    return(
        <>
        <h1>Use Effect</h1>
        <h1>{count}</h1>
        </>
    )
}
export default UseEffect1;