// import React from 'react';
// import {useParams} from 'react-router-dom'

// const User=()=>{
//     const params= useParams();
//     const {name}=params;
//     return(
//         <>
//         <center><h2>{name}'s Details</h2></center>
//         </>
//     )
// }
// export default User;

import React from 'react'
import {useParams} from 'react-router-dom'

const User=()=>{
    const params= useParams();
    const {name}=params;
    return(
        <>
        <center>
            <h1>{name}'s Details</h1>
        </center>
        </>
    )
}
export default User;