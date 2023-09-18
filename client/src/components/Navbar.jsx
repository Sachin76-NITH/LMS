import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  // const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  // useEffect(() => {
  //   const dropdowns = document.querySelectorAll('.navbar .dropdown-toggler');

  //   if (dropdowns.length) {
  //     dropdowns.forEach((dropdown) => {
  //       dropdown.addEventListener('click', (event) => {
  //         const target = document.querySelector(`#${event.target.dataset.dropdown}`);

  //         if (target) {
  //           if (target.classNameList.contains('show')) {
  //             target.classNameList.remove('show');
  //             setDropdownIsOpen(false);
  //           } else {
  //             target.classNameList.add('show');
  //             setDropdownIsOpen(true);
  //           }
  //         }
  //       });
  //     });
  //   }

  //   const handleBodyClick = (event) => {
  //     if (dropdownIsOpen) {
  //       dropdowns.forEach((dropdownButton) => {
  //         const dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`);
  //         const targetIsDropdown = dropdown === event.target;

  //         if (dropdownButton === event.target) {
  //           return;
  //         }

  //         if (!targetIsDropdown && !dropdown.contains(event.target)) {
  //           dropdown.classNameList.remove('show');
  //           setDropdownIsOpen(false);
  //         }
  //       });
  //     }
  //   };

  //   window.addEventListener('mouseup', handleBodyClick);

  //   return () => {
  //     window.removeEventListener('mouseup', handleBodyClick);
  //   };
  // }, [dropdownIsOpen]);

  // const handleSmallScreens = () => {
  //   document.querySelector('.navbar-toggler').addEventListener('click', () => {
  //     const navbarMenu = document.querySelector('.navbar-menu');

  //     if (!navbarMenu.classNameList.contains('active')) {
  //       navbarMenu.classNameList.add('active');
  //     } else {
  //       navbarMenu.classNameList.remove('active');
  //     }
  //   });
  // };

  // useEffect(() => {
  //   handleSmallScreens();
  // }, []);

  return (
    <div className="navbar">
   <nav className="navbar">
  <div className="container">

    <div className="navbar-header">
      <button className="navbar-toggler" data-toggle="open-navbar1">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a href="#">
        <h4>MAGMA<span>CORPS</span></h4>
      </a>
    </div>

    <div className="navbar-menu" id="open-navbar1">
      <ul className="navbar-nav">
        <li className="active"><Link to ={"/Home"}>Home</Link> </li>
        {/* <li className="navbar-dropdown">
          <a href="#" className="dropdown-toggler" data-dropdown="my-dropdown-id">
            User <i className="fa fa-angle-down"></i>
          </a>
          <ul className="dropdown" id="my-dropdown-id">
            <li><a href="#">Actions</a></li>
            <li><a href="#">Something else here</a></li>
            <li className="separator"></li>
            <li><a href="#">Seprated link</a></li>
            <li className="separator"></li>
            <li><a href="#">One more seprated link.</a></li>
          </ul>
        </li> */}
        {/* <li className="navbar-dropdown">
          <a href="#" className="dropdown-toggler" data-dropdown="blog">
            Blog <i className="fa fa-angle-down"></i>
          </a>
          <ul className="dropdown" id="blog">
            <li><a href="#">Some category</a></li>
            <li><a href="#">Some another category</a></li>
            <li className="separator"></li>
            <li><a href="#">Seprated link</a></li>
            <li className="separator"></li>
            <li><a href="#">One more seprated link.</a></li>
          </ul>
        </li> */}
       
        
        <li><Link to ={"/Login"}>Login</Link></li>
        <li><Link to ={"/Register"}>Register</Link></li>
        <li><Link to={"/User"}>LMS</Link></li>
        <li><Link to ={"/Blog"}>Team MAGMA</Link></li>
        <li><Link to ={"/Logout"}>Logout</Link></li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;