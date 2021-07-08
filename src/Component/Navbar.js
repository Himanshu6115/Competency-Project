import React from 'react';
import { useHistory }  from 'react-router-dom';
import '../CSS/Navbar.css'

function Navbar () {
    
    let history = useHistory();
  function Redirect () {
    history.push("/choice")

  }
  function Home () {
    history.push("/home")
  }

  return (
    <section className="navbar">
      <a href="/home" onClick= {() => {Home();}} className="navbar-item">HOME</a>
      <a href="/choice" onClick= {() => {Redirect();}} className="navbar-item">ADD NEW RECORD</a>
      <a href="/fetch.jsx" className="navbar-item">RECORDS</a>
      <a href="/remove.jsx" className="navbar-item">DELETE</a>
      <a href="/draft.jsx" className="navbar-item">E-MAIL</a>
      <a href="/" className="navbar-item">LOGOUT</a>
  </section>
  );

}

export default Navbar;