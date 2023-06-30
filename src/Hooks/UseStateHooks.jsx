import React, {useState} from 'react';

const UseStateHooks=()=>{
    const [show,setShow]=useState('HTML');
    const [count,setCount]=useState(0);

    const handleChange=()=>{
        setShow('React');
    }

    const handleIncrease=()=>{
        setCount(count+10)
    }
    const handleDecrease=()=>{
        setCount(count-5)
    }
    



    return(
    <>
    <header style={{
         backgroundColor:'red',
    }}>
   
    <h1 className='kar' >{show}</h1>
    </header>
    <button onClick={handleChange}>show</button><br/>
    <h1 style={{
        backgroundColor:'cyan',
    }}>{count}</h1>
    <button onClick={handleIncrease}>increase</button>
    <button onClick={handleDecrease}>decrease</button>
 
    

    </>
    )
}
export default UseStateHooks;
