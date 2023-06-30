// import React,{useRef} from 'react'

// const UseRef5=()=>{
//     const myRef = useRef('')

//     const handleShow=()=>{
//         console.log(myRef.current.value)
//     }
//     const handleFocus=()=>{
//         myRef.current.focus()
//     }
//     return(
//         <>
//         <center>
//             <h1>My name is kartick debnath</h1>
//             <input type='text' ref={myRef}/>
//             <button onClick={handleShow}>Show</button>
//             <button onClick={handleFocus}>Focus</button>
//             <br/> 
//         </center>
//         </>
//     )
// }
// export default UseRef5;

import React,{useState,useEffect,useRef} from 'react'

const UseRef5=()=>{
    const [value,setValue]=useState('')
    const renderCount=useRef(0)
    const handleChange=(e)=>{
     setValue(e.target.value);
    }
    useEffect(()=>{
        renderCount.current=renderCount.current+1;
    })
    return(
        <>
        <center>
            <h1>This is use ref</h1>
            <input type='text'  onChange={handleChange}/>
            <h2>Output is = <i>{value}</i></h2><i>{renderCount.current}</i>
        </center></>
    )
}
export default UseRef5;