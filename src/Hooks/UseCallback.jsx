import React,{useState,useCallback} from 'react'
import UseCallbacktodo from './Hooks/UseCallbacktodo.jsx'

const UseCallback=()=>{
    const[count,setCount]=useState(0)
    const[todo,setTodo]=useState([])

    const handleUpdate=()=>{
        setCount(count+5)
        
    }
    //child com re render hoi n use callback hooks use korle
    const handlenewTodo=useCallback(()=>{
        console.log('kartick')
    },[todo])
    return(
        <>
        <center>
            <h1>This is UseCallback</h1>
            <h2>{count}</h2>
            <UseCallbacktodo todo={todo} addNewTodo={handlenewTodo}/>
            <button onClick={handleUpdate}>Update</button>
        </center>
        </>
    )
}
export default UseCallback;