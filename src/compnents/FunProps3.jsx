import React from 'react';

const FunProps3=(props)=>{
    return(
        <>
        <h4>My name is {props.name} and title is {props.title} </h4> 
        {props.children}
        </>
    )
}
export default FunProps3;