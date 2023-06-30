import React from 'react'
import {increment,decrement,selectState} from './ShowList3'
import {useDispatch,useSelector} from 'react-redux'

const Show3=()=>{
    const count=useSelector(selectState);
    const dispatch= useDispatch();
    return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>Update</button>
    <button onClick={()=>dispatch(decrement())}>Delete</button>
    </>
)}
export default Show3;