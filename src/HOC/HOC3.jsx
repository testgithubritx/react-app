import React from 'react';

const HOC3=(props)=>{
    return(
        <>
        <div className="container">
            <header className="jumbotorn bg-warning text-light h1 text-center">
                HOC3
            </header>
            <props.component/>
        </div>
        </>
    )
}
export default HOC3;