import React from 'react';

import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const EcomNavbar=()=>{
  const Navigate = useNavigate();
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light  bg-primary col-12">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active" style={{marginLeft:'30px'}}>
      <Link to="/home" className="nav-link text-light" >Home </Link>
      </li>
        
    </ul>
    <form className="form-inline my-2 my-lg-0 "  >
      <input className="form-control mr-sm-2 rounded-pill" type="search" placeholder="Search for  product, brands and more" aria-label="Search" style={{width:'600px'}}/>
      <button className="btn btn-secondary my-2 my-sm-0 rounded-circle" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
    </form>
    <ul class="navbar-nav mr-auto mt-1 mt-lg-0">
    <li className="nav-item">
        <button className="nav-link  text-secondary border border-white " style={{marginLeft:'120px',height:'35px'}} onClick={()=>Navigate('login')}>Login</button>
      </li>
    <li className="nav-item">
        <button className="nav-link  text-secondary border border-white " style={{marginLeft:'18px',height:'35px'}} onClick={()=>Navigate('register')}>Register</button>
      </li>
    </ul>
  </div>
</nav>
        </>
    )
}
export default EcomNavbar;