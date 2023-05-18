import React from 'react'
import { Link } from 'react-router-dom';

const TopNav = () => {
    return(
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="/">
      <img className='logo' src='../images/logo.png' alt='logo'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
       
    <div className="search d-flex w-100 "> 
    
    <input type="text"  placeholder="Search..." name="" className=" rounded-pill form-control input-sm search-input" id="inputsm"  />
     <a href="#" className="search-icon"> <i className="fa fa-search" style={{position: "relative", right: "31px", top: "6px"}}></i> </a> </div>
                </div>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to="/login">SignIn</Link>
        </li>
        <li className="nav-item me-3">
        <i className="fa fa-heart-o mt-2 " aria-hidden="true"></i>
        </li>
        <li className="nav-item ">
        <i className="fa fa-shopping-bag mt-2" aria-hidden="true"></i>
        </li>
      </ul>
    </div>

</nav>
</>
    )
}
export default TopNav;