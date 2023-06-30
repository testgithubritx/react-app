import React from 'react'
import {useParams} from 'react-router-dom'


const User3=()=>{
    const params=useParams()
    const {name}=params;
    return(
        <>
        <div className='container'>
        <h2>{name}'s Details</h2>
        </div>
        </>
    )
}
export default User3