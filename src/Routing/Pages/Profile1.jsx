import React from 'react';
import {NavLink,Link,Outlet} from 'react-router-dom'

const Profile1=()=>{
    return(
        <>
        <div className="container">
            <header className="jumbotton bg-warning text-light h1 text-center" style={{height:'150px'}}><br/>
                <h5>PROFILE1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni neque quod quis delectus aliquam repudiandae nesciunt sed. Deserunt, quos?</h5>
            </header>
           
            <NavLink to={'/about'}>About1</NavLink><br/><br/>
            <div className="bg-success " style={{width:'220px'}}>
             <Link to={'account'} className="text-light">Account Info</Link>&nbsp;&nbsp;&nbsp;
             <Link to={'personal'} className="text-light">Personal Info</Link>
             </div>
             <Outlet/>
        </div>
        </>
    )
}
export default Profile1;