import React, {useState, useEffect} from 'react'

const UseEffect2=()=>{
    const [value,setValue]=useState(0);

    useEffect(()=>{
        
        setInterval(()=>{
          setValue(value+5)
        },2000)
        document.title= value+1;
    })
    return(
        <>
        <h1>This is Use Effect</h1>
        <h3> {value} </h3>
        </>
    )
}
export default UseEffect2;