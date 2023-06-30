import React,{createContext,useState} from 'react'
import UseContextChild12 from './UseContextChild12'

export const Globalinfo=createContext()
 
const UseContext12=()=>{
    const[color,setColor]=useState('red')
    const[day,setDay]=useState('sunday')
    const getDay=(item)=>{
        setDay(item)
    }
    return(
        <Globalinfo.Provider value={{color,getDay}}>
        <>
        <center>
            <h1>This is use context {day}</h1>
            
        </center>
        <UseContextChild12/>
        </>
        </Globalinfo.Provider>

    )
}
export default UseContext12;