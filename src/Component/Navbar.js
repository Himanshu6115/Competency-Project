import React from 'react';
import { useHistory }  from 'react-router-dom';
import '../CSS/Navbar.css'

function Navbar () {
    
    let history = useHistory();

  function Home () {
    history.push("/home")
  }

  function  Timesheet(){
    history.push("/timesheet")
  }
  

  return (
    <section className="navbar">
      <a href="/home" onClick= {() => {Home();}} className="navbar-item">HOME</a>
      <a href="/timesheet" onClick={()=>{Timesheet();}} className="navbar-items">Add Timesheet</a>
     
  </section>
  );

}

export default Navbar;