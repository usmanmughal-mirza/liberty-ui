import "./navbar.css";
import {HiMenuAlt3} from "react-icons/hi";
import { useState } from "react";

const Items =() =>(
  <>
  <li><a  href="#" >Home </a> </li>
  <li><a  href="#">Explore </a> </li>
  <li><a  href="#">Item Details </a> </li>
  <li><a  href="#">Author</a> </li>
  <li><a  href="#">Create Yours </a> </li>
  </>
)

const Navbar = () => {
  const [showMobileNav,setShowMobileNav]=useState(false);

  return (
    <section className="navigation">
      <div className="container">
        <div className="primary-navigation">
         
          <div>
          <img src="https://templatemo.com/templates/templatemo_577_liberty_market/assets/images/logo.png" alt="nav_logo" />
        </div>
       
        {/* nav --- */}
        <nav className="nav-lg">
          <ul role="list">
            <Items />
          </ul>
          <span onClick={() =>setShowMobileNav( (preSta) =>!preSta ) }><HiMenuAlt3 /> </span>
        </nav>
      
        {/* mobile nav ------ */}
       
        <nav className={showMobileNav ? "nav-md active" : "nav-md close"} >
           <ul role="list" onClick={() =>setShowMobileNav(false) }>
            <Items />
          </ul>
        </nav>

        </div>
        
      </div>
    </section>
  )
}

export default Navbar