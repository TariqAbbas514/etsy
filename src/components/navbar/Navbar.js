
import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid mx-3">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  

      <ul className="navbar-nav menubar m-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link" href="#">Jewellery & Accessories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
Clothing & Shoes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Home & Living</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Wedding & Party</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Toys & Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Art & Collectibles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Craft Supplies & Tools</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Vintage</a> */}
          <Link className="nav-link fw-bold" to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </div>

</nav>
</>
    )
}
export default Navbar;