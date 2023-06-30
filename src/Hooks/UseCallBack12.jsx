import React,{useState,useCallback} from 'react'
import UseCallBackChild12 from './UseCallBackChild12'

const UseCallBack12=()=>{
    const[count,setCount]=useState(0)
    const learning=useCallback(()=>{
        //
    },[])
    return(
        <>
        <center>
            <h1>This is use call back 12</h1>
            <h4>{count}</h4>
            <UseCallBackChild12 learning={learning}/>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </center>
        </>
    )
}
export default UseCallBack12;