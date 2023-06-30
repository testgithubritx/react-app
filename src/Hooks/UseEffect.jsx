import React, {useState,useEffect} from 'react';

const UseEffect=()=>{
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log('start');
        setInterval(()=>{
         setCount(count+5)
        },2000)
        document.title=count+1;

    })   //[] r jnno 1 bar e print hobe r ata n dile print hoye jbe
    return (
    <>
    <h1>{count}</h1>
    </>
    )
}
export default UseEffect;