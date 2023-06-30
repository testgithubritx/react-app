import React,{useContext} from 'react'
import {GlobelInfo} from './UseContext9'

const UseContextSuper9=()=>{
    const {color}=useContext(GlobelInfo)
    return(
        <>
       
            <h3 style={{color}}>This is super context</h3>
      
        </>
    )
}
export default UseContextSuper9