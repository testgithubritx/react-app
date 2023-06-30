import React,{useReducer} from 'react'

const reducer=(show,action)=>{
   switch(action){
    case 'increment':
        return show+5;
        break;
    case 'decrement':
        return show-1;
        break;
        default:
        break;
   }
}

const UseReducer9=()=>{
    const init=0;
    const[show,dispatch]=useReducer(reducer,init)
    return(
        <>
        <center>
            <h1>This is use reducer</h1>
            <h4>{show}</h4>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
        </center>
        </>
    )
}
export default UseReducer9