import React,{useState,useCallback} from 'react'
import UseCallback2todo from './UseCallback2todo'
const UseCallback2=()=>{
    const [count,setCount]=useState(0)
    const[todo,setTodo]=([])

    const handleUpdate=()=>{
        setCount( count+1)
    }
    // ata hole memo use korbo child a tao re render hobe 
    // const handleTodo=()=>{
    //     //
    // }

    const handleTodo=useCallback(()=>{
        //any 
    },[todo])
    
    return(
        <>
        <center>
            <h2>This is use Callback</h2>
            <h1>{count}</h1>
            <UseCallback2todo todo={handleTodo}/>
            <button onClick={handleUpdate}>Count</button>
           
        </center></>
    )
}
export default UseCallback2;