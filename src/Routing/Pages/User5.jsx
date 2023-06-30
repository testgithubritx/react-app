import React from 'react'
import {useParams} from 'react-router-dom'
const User5=()=>{
    const params=useParams();
    const {name}=params;
    return(
        <>
        <div className='container'>
            <center><h2>{name}'s Details</h2></center>
        </div>
        </>
    )
}
export default User5;