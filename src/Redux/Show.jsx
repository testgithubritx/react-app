import React from 'react';
import { increment, decrement ,reset,selectState} from './ShowList';
import {useDispatch, useSelector} from 'react-redux'

const Show=()=>{
    const count =useSelector(selectState);
    const dispatch =useDispatch();
    return(
     <>
      <h1 style={{marginLeft:'77px'}}>{count}</h1>
      <button onClick={()=>dispatch(increment())}>Update</button>
      <button onClick={()=>dispatch(decrement())}>Delete</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
     </>
    )
}
export default Show;