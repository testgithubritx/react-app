import React from 'react';
import axios from 'axios';

const DataGet2=()=>{
    const handle=()=>{
        axios.get('users')
        .then(res=>console.log(res.data))
    }
    return(
        <>
        <button onClick={handle}>Show</button>
        </>
    )
}
export default DataGet2;