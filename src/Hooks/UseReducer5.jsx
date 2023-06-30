import React,{useReducer} from 'react'
const reducer=(show,action)=>{
    switch(action){
        case 'Increment':
            return show+5;
        break;
        case 'Decrement':
            return show-1;
        break;
        case 'Reset':
            return 0;
        break;
    }
}
const init=0;

const UseReducer5=()=>{
    const [show,dispatch]=useReducer(reducer,init)
    return(
        <>
        <center>
            <h1>this is use reducer</h1>
            <h2>{show}</h2>
            <button onClick={()=>dispatch('Increment')}>Update</button>
            <button onClick={()=>dispatch('Decrement')}>Delete</button>
            <button onClick={()=>dispatch('Reset')}>Reset</button>
        </center>
        </>
    )
}
export default UseReducer5