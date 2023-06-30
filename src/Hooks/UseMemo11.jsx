import React,{useState,useMemo} from 'react'

const UseMemo11=()=>{
    const[update,setUpdate]=useState(0)
    const handleUpdate=()=>{
        setUpdate(update+1)
    }
    const memo=useMemo(()=>{
        return update*100;
    })
    return(
        <>
        <center>
            <h1>This is use memo</h1>
            <h4>Quantity:{update}</h4>
            <h4>Amount:{memo}</h4>
            <button onClick={handleUpdate}>Update</button>
        </center>
        </>
    )
}
export default UseMemo11;