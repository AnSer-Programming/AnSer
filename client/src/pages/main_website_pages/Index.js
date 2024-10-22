import React from 'react';
// import logo from '../../assets/img/AnSerLogo2.png';
import logo from '../../assets/img/AnSerLogo-480w.png';
import inc5000 from '../../assets/img/inc5000.png';

import HomePage from './HomePage';
import CustomerLogin from './CustomerLogin';

const Index = (data) => {
  return (
    <>
      <div class="banner">
        <p><a href="mailto:info@anser.com" class="mailToLink">info@anser.com</a></p>
        <p>Like Us On: </p>
      </div>
      <div class="headerContent">
        <img src={inc5000} class="headerContentImage" />
        <img src={logo} class="headerContentImage" />
      </div>
      <nav class="navbar">
        <ul class="menuHolder">
          <li class="menuItems" onClick={() => { window.location.href = '/' }}>Home</li>
          <li class="menuItems">Services</li>
          <li class="menuItems">Company Info</li>
          <li class="menuItems">Industries</li>
          <li class="menuItems">Locations</li>
          <li class="menuItems">Career</li>
          <li class="menuItems">Blog</li>
          <li class="menuItems">Contact Us</li>
          <li class="menuItems" onClick={() => { window.location.href = '/CustomerLogin' }}>CUSTOMER LOGIN</li>
        </ul>
      </nav>
      {
        {
          'Index': <HomePage />,
          'CustomerLogin': <CustomerLogin />
        }
        [data.page]}
    </>
  );
};

export default Index;