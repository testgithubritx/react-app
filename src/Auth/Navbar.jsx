import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(
        <>
        <div className="container">
            <nav className='nav border bg-dark border-warning justify-content-center m-2'>
                <Link className='nav-link text-warning' to='/'>Home</Link>
                <Link className='nav-link text-warning' to='/about'>About</Link>
                <Link className='nav-link text-warning' to='/profile'>Profile</Link>
                <Link className='nav-link text-warning' to='/login'>Login</Link>
            </nav>
        </div>
        </>
    )
}
export default Navbar;