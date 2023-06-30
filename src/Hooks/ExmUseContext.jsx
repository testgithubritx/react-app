import React,{createContext,useState} from 'react'
 import ChildContext from './ChildContext'

export const GlobalInfo=createContext()
const ExmUseContext=()=>{
    const[color,setColor]=useState('red')
    const[day,setDay]=useState('Monday')

    const getDay=(item)=>{
        setDay(item)
    }
    return(
        <GlobalInfo.Provider value={{color,getDay}} >
        <>
        <center>
            <h1>This is use context {day}</h1>
            
        </center>
        <ChildContext/>
        </>
        </GlobalInfo.Provider>
    )
}
export default ExmUseContext;