import React,{useContext} from 'react'
import {GlobelInfo} from './UseContext9'
import UseContextSuper9 from './UseContextSuper9'

const UseContextChild9=()=>{
    const {color}=useContext(GlobelInfo)
    // const {color,getDay}=useContext(GlobelInfo)
    const day='sunday'
    return(
        <>
        <center>
            <h3 style={{color}}>This is child context</h3>
            {/* <button onClick={()=>getDay(day)}>Click</button> */}
            <UseContextSuper9/>
        </center>
        </>
    )
}
export default UseContextChild9