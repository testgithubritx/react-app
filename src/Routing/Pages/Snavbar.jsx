import React from 'react';

import { Link} from 'react-router-dom';


const Snavbar=()=>{
 
    return(
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light  bg-warning">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active" style={{marginLeft:'30px'}}>
      <Link to="/" className="nav-link text-light" >SHome </Link>
      </li>
      <li className="nav-item " style={{marginLeft:'30px'}}>
      <Link to="/about" className="nav-link text-light" >SAbout</Link>
      </li>
        
    </ul>
   
    
  </div>
</nav>
        </div>
    )
}
export default Snavbar;