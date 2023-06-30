import React from 'react';
import {increment,decrement,reset,selectState} from './ShowList2';
import {useDispatch,useSelector} from 'react-redux';
import './Show2.css'

const Show2=()=>{
    const count = useSelector(selectState);
    const dispatch =useDispatch();
    return(
        <>
        <h1 >{count}</h1><br/>
        <button onClick={()=>dispatch(increment())}>Update</button>
        <button onClick={()=>dispatch(decrement())}>Delete</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        </>
    )
}
export default Show2;