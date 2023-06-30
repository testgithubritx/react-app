// import React,{useRef} from 'react'

// const UseRef9=()=>{
//     const myRef=useRef('')
//     const handleShow=()=>{
//         console.log(myRef.current.value)
//     }
//     const handleFocus=()=>{
//         myRef.current.focus()
//     }
//     return(
//     <>
//     <center>
//         <h1>This is ude ref</h1>
//         <input type='text' ref={myRef}/>
//         <button onClick={handleShow}>Submit</button>
//         <button onClick={handleFocus}>focus</button>
//     </center>
//     </>
// )}
// export default UseRef9

import React,{useRef} from 'react'

const UseRefs9=()=>{
    const myRef=useRef('')
    const handleShow=()=>{
        console.log(myRef.current.value)
    }
    const handleFocus=()=>{
        return (myRef.current.focus())
    }
    return(
        <>
        <center>
            <h1>This is use ref</h1>
            <input tpye='text' ref={myRef}/>
            <button onClick={handleShow}>show</button>
            <button onClick={handleFocus}>focus</button>
        </center>
        </>
    )
}
export default UseRefs9