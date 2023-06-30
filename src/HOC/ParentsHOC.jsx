import  React from 'react';
import Logic from './Logic'
import HOC1 from './HOC1'
import HOC2 from './HOC2'
import HOC3 from './HOC3' 

 const ParentsHOC=()=>{
    return(
        <>        
        <br/>
        <HOC1 component={Logic}/><br/>
        <HOC2 component={Logic}/><br/>
        <HOC3 component={Logic}/><br/>
        </>

    )
 }
 export default ParentsHOC;