import React from 'react';
import Logic1 from './Logic1'
import NHOC1 from './NHOC1'
import NHOC2 from './NHOC2'
import NHOC3 from './NHOC3'

const ParentsHOC2=()=>{
    return(
        <>
        <br/>
        <NHOC1 component={Logic1}/>
        <NHOC2 component={Logic1}/>
        <NHOC3 component={Logic1}/>
        </>
    )
}
export default ParentsHOC2;