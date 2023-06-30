import React,{useContext} from 'react'
import {GlobalInfo} from './ExmUseContext'

const SuperChildContext=()=>{
    const {color}=useContext(GlobalInfo)
   
    return(
        <>
        <center>
            <h1 style={{color}}>This is Super Child context</h1>
        </center>
        </>
    )
}
export default SuperChildContext;