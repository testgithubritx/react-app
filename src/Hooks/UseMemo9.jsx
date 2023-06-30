import React,{useState,useMemo} from 'react';

const UseMemo9=()=>{
    const[count,setCount]=useState(0)
    const memo=useMemo(()=>{
        return count*100
    })
    return(
        <>
        <center>
        <h1>This is use memo</h1>
        <h3>Quantity:{count}</h3>
        <h3>Amount:{memo}</h3>
        <button onClick={()=>setCount(count+1)}>Order</button>
        </center>
        </>
    )}
export default UseMemo9;