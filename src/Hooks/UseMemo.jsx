import React,{useState,useMemo} from 'react'
const UseMemo=()=>{
    const [count,setCount]=useState(0)
    const[update,setUpdate]=useState(0)

    const countMemo=useMemo(()=>{
        return count*50;
    },[count])
    const countMemoUpdate=useMemo(()=>{
        return update*200;
    },[update])
    return(
        <>
        <center>
            <h2>This is use Memo</h2>
            <h2>Amount:{countMemo}</h2>
            <h1>{count}</h1>
            <button onClick={(()=>setCount(count+1))}>Count</button>
            <h2>Phone Cost:{countMemoUpdate}</h2>
            <h1>{update}</h1>
            <button onClick={(()=>setUpdate(update+2))}>Update</button>
        </center></>
    )
}
export default UseMemo;