import React,{useRef} from 'react';

const RefExample3=()=>{
    const myRef=useRef('')

    const handleShow=()=>{
        console.log(myRef.current.value)
    }

    const handleFocus=()=>{
        myRef.current.focus()
    }
    return(
        <>
        <h1>This is Ref Example</h1>
        <input type='text' ref={myRef}/>
        <button type='submit' onClick={handleShow}>show</button>
        <button type='submit' onClick={handleFocus}>Focus</button>
        </>
    )
}
export default RefExample3