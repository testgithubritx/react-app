import React,{createContext,useState} from 'react'
import UseContextChild9 from './UseContextChild9'

export const GlobelInfo=createContext()

const UseContext9=()=>{
    const[color,setColor]=useState('red')
    // const[day,getDay]=useState('monday') [child to parent]
    return(
        <>
         <GlobelInfo.Provider value={{color}}>
        {/* <GlobelInfo.Provider value={{color,getDay}}> */}
        <center>
        <h1>This is use context </h1>
            {/* <h1>This is use context {day}</h1> */}
            <UseContextChild9/>
        </center>
        </GlobelInfo.Provider>
        </>
    )
}
export default UseContext9