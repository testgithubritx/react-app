import React,{useState} from 'react'

const UseState12=()=>{
    const [count,setCount]=useState('js')
    const[update,setUpdate]=useState(0)

    const handleCount=()=>{
        setCount('reactjs')
    }
    const handleUpdate=()=>{
        setUpdate(update+5)
    }
    return(
        <>
        <center>
            <h2>This is Use State12</h2>
            <h4>{count}</h4>
            <button onClick={handleCount}>Count</button>
            <h4>{update}</h4>
            <button onClick={handleUpdate}>Update</button>
        </center>
        </>
    )
}
export default UseState12;