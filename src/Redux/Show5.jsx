import React from 'react'
import {increment,decrement,reset,selectState} from './ShowList5'
import {useDispatch,useSelector} from 'react-redux'

const Show5=()=>{
    const dispatch=useDispatch()
    const count =useSelector(selectState)
    return(
        <>
        
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>

        
        </>
    )
}
export default Show5;