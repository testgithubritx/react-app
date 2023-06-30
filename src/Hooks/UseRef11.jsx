import React,{useRef} from 'react'

const UseRef11=()=>{
    const ref=useRef('')
    const handleShow=()=>{
        console.log(ref.current.value)
    }
    const handleFocus=()=>{
        ref.current.focus()
    }
    return(
        <>
        <center>
            <h1>This is use Ref</h1>
            <input type='text' ref={ref}/>
            <button onClick={handleShow}>Show</button> 
            <button onClick={handleFocus}>Focus</button> 
        </center>
        </>
    )
}
export default UseRef11;