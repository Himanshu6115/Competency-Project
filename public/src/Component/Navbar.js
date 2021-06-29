import React from 'react';

import '../CSS/Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/home.jsx" activeClassName="active" className="navbar-item">HOME</a>
      <a href="/add" className="navbar-item">ADD NEW RECORD</a>
      <a href="/fetch.jsx" className="navbar-item">RECORDS</a>
      <a href="/remove.jsx" className="navbar-item">DELETE</a>
      <a href="/draft.jsx" className="navbar-item">E-MAIL</a>
      <a href="/" className="navbar-item">LOGOUT</a>
  </section>
  );

}

export default Navbar;