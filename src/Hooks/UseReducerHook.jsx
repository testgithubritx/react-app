// import React, {useReducer} from 'react';

// const reducer = (show,action)=>{
//   switch (action) {
//     case 'Increment':
//         return show+5;
//         break;
//         case 'Decrement':
//         return show-1;
//         break;
//         case 'Reset':
//         return 0;
//         break;
//   }
// }
// const init=0;

// const UseReducerHook=()=>{
//     const [show, dispatch]=useReducer(reducer,init);
//     return(
//      <>
//      <h1>{show}</h1>
//      <button onClick={()=>dispatch('Increment')}>update</button>
//      <button onClick={()=>dispatch('Decrement')}>delete</button>
//      <button onClick={()=>dispatch('Reset')}>reset</button>
//      </>
//     )
// }
// export default UseReducerHook;
