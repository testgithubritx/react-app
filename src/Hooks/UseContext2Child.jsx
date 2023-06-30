import React,{useContext} from 'react'
import {GlobalInfo} from './UseContext2'

const UseContext2Child=()=>{
    const {color,getDay}=useContext(GlobalInfo)
    const day='Sunday'
    return(
        <>
        <center>
            <h1 style={{color}}>This is Use context Child</h1>
            <button onClick={()=>getDay(day)}>change</button>
        </center>
        </>
    )
}
export default UseContext2Child