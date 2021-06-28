import React from 'react';
import '../CSS/Registration.css';

function Registration () {
    return (
    <div className="Reg">
      <form>
      <div className="registration">
      <h1>Registration Form</h1>
      </div>
      <div className ="forms">
       <div className="fields">
       <label >User Name </label>
       <input type="text" placeholder="UserName" id ="Name"></input>
       </div> 
        <div className="fields">
       <label id="email">E-Mail </label>
       <input type="email" placeholder="example.com" id ="mail"></input>
       </div>
         <div className="fields">
       <label id="desg">Designation </label>
       <input type="Password" placeholder="Designation" id ="designation"></input>
       </div>
       <div className="fields">
       <label id="desg">Department </label>
       <input type="Password" placeholder="Department" id ="designation"></input>
       </div>
        <div className="fields">
       <label id ="pwd"> Password </label>
       <input type="Password" placeholder="Password" id ="Password"></input>
       </div>
       <button id="btn">Submit</button>
       </div>
      </form>
    </div>
  );

  
}
export default Registration;