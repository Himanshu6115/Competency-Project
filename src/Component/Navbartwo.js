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
  function Delete (){
    history.push("/delete")
  }
   function Updated (){
    history.push("/update")
  }
 
  

  return (
    <section className="navbar">
      <a href="/home" onClick= {() => {Home();}} className="navbar-item">HOME</a> 
      <a href="/choice" onClick= {() => {Redirect();}} className="navbar-item">ADD NEW RECORD</a>
      <a href="/records" className="navbar-item">RECORDS</a>
      <a href="/delete" onClick= {() => {Delete();}} className="navbar-item">DELETE</a>      
      <a href="/update" onClick={()=>{Updated();}} className="navbar-item">Update</a>
      <a href="/" className="navbar-item">LOGOUT</a>
  </section>
  );

}

export default Navbar;