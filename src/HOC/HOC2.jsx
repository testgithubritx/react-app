import React from 'react';

const HOC2=(props)=>{
    return(
        <>
        <div className="container">
            <header className="jumbotorn bg-secondary text-light h1 text-center">
                HOC2
            </header>
            <props.component/>
        </div>
        </>
    )
}
export default HOC2;