import React from 'react'
import {Link} from 'react-router-dom'
const Navbar5=()=>{
    return(
        <>
        <div className='container'>
            <nav className='navbar navbar-dark bg-dark'>
                <Link to='/user5/sourav'>Sourav</Link>
                <Link to='/user5/kartick'>Kartick</Link>
                <Link to='/user5/dip'>Dip</Link>
            </nav>
        </div>
        </>
    )
}
export default Navbar5;