import React,{useState,useMemo} from 'react'
const UseMemo8=()=>{
    const[count,setCount]=useState(0)
    const memo=useMemo(()=>{
        return count*50
    },[count])
    

    return(
        <>
        <center>
            <h1>This is memo</h1>
            <h4>Quantity:{count}</h4>
            <h4>Amount:{memo}</h4>
            <button onClick={()=>setCount(count+1)}>Update</button>
           
           
           
        </center>
        </>
    )
}
export default UseMemo8