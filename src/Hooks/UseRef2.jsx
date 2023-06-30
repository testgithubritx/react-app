import React,{useState,useEffect,useRef} from 'react';

const UseRef2=()=>{
    const [value,setValue]=useState('');
    const renderCount=useRef(0)

    const handleChange=(e)=>{
         setValue(e.target.value);
    }

    useEffect(()=>{
        renderCount.current = renderCount.current+1;
    })
    return(
        <>
        <h2>This is use ref</h2><br/>
        <input type='text' value={value} onChange={handleChange}/>
        <h2>DOM RENDER <i>{renderCount.current}</i></h2>
        <h2>Pakhi <i>{value}</i></h2>
        </>
    )
}
export default UseRef2;