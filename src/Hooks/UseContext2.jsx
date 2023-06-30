import React,{createContext,useState} from 'react'
import UseContext2Child from './UseContext2Child'

export const GlobalInfo=createContext()
const UseContext2=()=>{
    const[color,setClor]=useState('red')
    const[day,setDay]=useState('monday')
    const getDay=(i)=>{
        setDay(i)
    }
    return(
        <GlobalInfo.Provider value={{color,getDay}}>
        <>
        <center>
            <h1>This is Use context {day}</h1>
            <UseContext2Child/>
        </center>
        </>
        </GlobalInfo.Provider>
    )
}
export default UseContext2