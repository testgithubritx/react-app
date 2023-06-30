import React from 'react'

const NHOC2=(props)=>{
    return(
        <>
        <div className='container'>
            <header className='jumbotron bg-danger text-light h1 text-center'>
                NHOC2
            </header>
            <props.component/>
        </div>
        </>
    )
}
export default NHOC2;