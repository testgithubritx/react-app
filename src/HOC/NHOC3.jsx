import React from 'react'

const NHOC3=(props)=>{
    return(
        <>
        <div className='container'>
            <header className='jumbotron bg-primary text-light h1 text-center'>
                NHOC3
            </header>
            <props.component/>
        </div>
        </>
    )
}
export default NHOC3;