import React,{useState,useEffect,useRef} from 'react';

const UseRef1=()=>{
      const [value,setValue]=useState('');
      const renderCount=useRef(0);
      const handleChange=(e)=>{
        setValue(e.target.value)
      }
      useEffect(()=>{
        renderCount.current=renderCount.current+1;
      })

    return(
        <>
        <center><br/>
            <input type='text' value={value} onChange={handleChange}/><br/>
            <h2>DOM RENDER <i>{value}</i></h2>
        </center>
        </>
    )
}
export default UseRef1;