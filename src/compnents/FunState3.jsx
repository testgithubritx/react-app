import React,{ useState} from 'react';

const FunState3=()=>{
    const [data,setData]=useState('JS')
    const [value,setValue]=useState(0)

    const handleChange=()=>{
        setData('ReactJS')
    }
    return(
        <>
       <h3> This is Fun State</h3>
       {data}<br/>
       <button onClick={handleChange}>Change</button><br/>
       {value}<br/>
       <button onClick={()=>setValue(value+5)}>  Increment</button>
       <button onClick={()=>setValue(value-1)}>Decrement</button>
        
        </>
    )
}
export default FunState3;