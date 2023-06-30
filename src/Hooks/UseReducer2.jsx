import React,{useReducer}  from 'react'

const reducer=(show,action)=>{    //reducer fun k alada kore define korte hobe
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

const UseReducer2=()=>{
    const init=0;
    const [show, dispatch ]=useReducer(reducer, init)   //dispatch method - reducer fun k nicche, show-init
    return(
        <>
        <h2>This is Use Reducer</h2>
        <h3>{show}</h3>
        <button onClick={()=>dispatch('Increment')}>Increment</button>
        <button onClick={()=>dispatch('Decrement')}>Decrement</button>
        <button onClick={()=>dispatch('Reset')}>Reset</button>
        </>
    )
}
export default UseReducer2;