import React,{useState,useMemo} from 'react'

const UseMemo12=()=>{
    const[update,setUpdate]=useState(0)
    const memo=useMemo(()=>{
        return update*100
    })
    return(
        <>
        <center>
            <h1>This is use memo 12</h1>
            <h4>Amount:{memo}</h4>
            <h4>Quantity:{update}</h4>
            <button onClick={()=>setUpdate(update+1)}>Update</button>
        </center>
        </>
    )
}
export default UseMemo12