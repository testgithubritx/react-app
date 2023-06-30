import React,{useContext} from 'react'
import {Globalinfo} from './UseContext12'
 
const UseContext12=()=>{
    const{color,getDay}=useContext(Globalinfo)
    const day='monday'
    return(
        <>
        <center>
            <h1 style={{color}}>This is use context</h1>
            <button onClick={()=>getDay(day)}>change</button>
        </center>
        </>
    )
}
export default UseContext12;