import React from 'react';
import {increment,decrement,reset, selectState} from './ShowList'
import {useDispatch, useSelector} from 'react-redux'

const Show1=()=>{
    const count =useSelector(selectState);
    const dispatch= useDispatch();
    return(
        <>
        <h3>{count}<br/></h3>
        <button onClick={()=>dispatch(increment())}>Update</button>
        <button onClick={()=>dispatch(decrement())}>Delete</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        </>
    )
}
export default Show1;