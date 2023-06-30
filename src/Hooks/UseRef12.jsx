import React,{useRef} from 'react'

const UseRef12=()=>{
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
            <h4>This is use ref 12</h4>
            <input type='text' ref={ref}/>
            <button onClick={handleShow}>Show</button>
            <button onClick={handleFocus}>Focus</button>
        </center>
        </>
    )
}
export default UseRef12