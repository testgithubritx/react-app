import React,{useContext} from 'react'
import {GlobalInfo} from './ExmUseContext'
import SuperChildContext from './SuperChildContext'

const ChildContext=()=>{
    const {color,getDay}=useContext(GlobalInfo)
    const day='Sunday'
   
    return(
        <>
        <center>
            <h1 style={{color}}>This is Child context</h1>
            <button onClick={()=>getDay(day)}>Click Me</button>
            <SuperChildContext/>
        </center>
        </>
    )
}
export default ChildContext;