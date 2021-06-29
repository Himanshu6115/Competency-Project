import React from 'react';
import Navbar from './Navbar.js';
import '../CSS/Header.css';

function Add () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <img src='download1.jpg'></img>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>          
        </section>
      </section>
    </section>
  );
}
export default Add;