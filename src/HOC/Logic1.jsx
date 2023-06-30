import React, {useState} from 'react';

const Logic1=()=>{
    const [value,setValue]=useState(0)
    return(
        <>
            {value}<br/>
            <button onClick={()=>setValue(value+5)}>Update</button>
            <button onClick={()=>setValue(value-1)}>Delete</button>
            <button onClick={()=>setValue(0)}>Reset</button>

        
        </>
    )
}
export default Logic1;