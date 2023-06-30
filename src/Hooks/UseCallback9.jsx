import React,{useState,useCallback} from 'react';
import UseCallbackChild9 from './UseCallbackChild9'

const UseCallback9=()=>{
    const[count,setCount]=useState(0)
    const learning=useCallback(()=>{
        //
    },[])
    return(
        <>
        <center>
            <UseCallbackChild9 Learning={learning}/><br/>
            <h1>This is use Call back</h1>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+5)}>Update</button>
            
        </center>
        </>
    )

}
export default UseCallback9;