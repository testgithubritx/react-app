import React from 'react'
import {NavLink,Link,Outlet} from 'react-router-dom'

const Profile3 = () => {
    return (
        <>
            <div className='container'>
                <header className='jumbotron bg-warning text-light h1 text-center '>Profile3</header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt aut officia ab asperiores sapiente dolores nemo mollitia dolorem cum.</p>
                <NavLink to='/about2'>About2</NavLink>
                <br/><br/>
                <nav className='navbar navbar-dark bg-dark'>
                    <Link to='account3'>AccountDetails3</Link>
                    <Link to='personal3'>PersonalDetails3</Link>
                </nav>
                <Outlet/>

            </div>
        </>
    )
}
export default Profile3;