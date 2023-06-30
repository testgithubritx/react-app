import React,{useState,useMemo} from 'react'
const UseMemo2=()=>{
    const[update,setUpdate]=useState(0)
    
    const handleUpdate=()=>{
        setUpdate(update+1)
    }
    const countMemo=useMemo(()=>{
        return update*200
    },[update])
    
    return(
        <>
        <center>
            <h1>This is Use Memo 2</h1>
            <h3>{update}</h3>
            <h3>Amount is:-{countMemo}</h3>
            <button onClick={handleUpdate}>Update</button>
        </center>
        </>
        )
}
export default UseMemo2