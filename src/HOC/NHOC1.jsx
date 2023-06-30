import React from 'react'

const NHOC1=(props)=>{
    return(
        <>
        <div className='container'>
            <header className='jumbotron bg-warning text-light h1 text-center'>
                NHOC1
            </header>
            <props.component/>
        </div>
        </>
    )
}
export default NHOC1;