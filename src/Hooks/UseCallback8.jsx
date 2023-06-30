import React,{useState,useCallback} from 'react'
import UseCallbackChild8 from './UseCallbackChild8'
const UseCallback8=()=>{
    const[count,setCount]=useState(0)
     
    //child com r date show r jnno
    // const Learning=()=>{

    // }

    const Learning=useCallback(()=>{
       //
    },[])
   
    return(
        <>
        <center>
            <h2>This is use callback</h2>
            
            <h4>{count}</h4>
            <UseCallbackChild8 Learning={Learning}/> 
            {/* learning props hisab a pass korlam */}
            <button onClick={()=>setCount(count+1)}>Update</button>
        </center>
        </>
    )
}
export default UseCallback8;