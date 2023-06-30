import React, {useState,useEffect,useRef} from 'react'

const UseRefHook=()=>{

    const [value,setValue]=useState('');
    const renderCount = useRef(0);

    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    useEffect(()=>{
        renderCount.current = renderCount.current+1;
    })
    return(
        <>
        <input type="text" value={value} onChange={handleChange}/>
        <h2>Dom Render<i>{renderCount.current}</i></h2>
        <h1>{value}</h1>
        </>
    )
}
//2
export const InputRef=()=>{
    const inRef= useRef();
    const handleFocus=()=>{
        inRef.current.focus();
    }

    return(
        <>
        <input type="text" ref={inRef}/>
        <button onClick={handleFocus}>Focus</button>
        </>
    )
}

export default UseRefHook;