import React from 'react';

const HOC1=(props)=>{
    return(
        <>
        <div className="container">
            <header className="jumbotorn bg-primary text-light h1 text-center">
                HOC1
            </header>
            <props.component/>
        </div>
       
        </>
    )
}
export default HOC1;