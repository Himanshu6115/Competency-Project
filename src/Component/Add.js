import React from 'react';
import Navbar from './Navbar.js';
import '../CSS/Header.css';

function Add () {

  return (
     <div className="Reg">
     <section className="header">
      <section className="header-top">
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>          
        </section>
        </section>          
        </section>
      <form>
      <div className ="forms">
       <div className="fields">
       <label id="id">Global ID </label>
       <input type="text" placeholder="Global ID" id ="globalID"></input>
       </div> 
        <div className="fields">
       <label id="emplName">Empl Name </label>
       <input type="text" placeholder="Employee Name" id ="empName"></input>
       </div>
        <div className="fields">
       <label id="gen">Gender </label>
       <input type="text" placeholder="Gender" id ="gender"></input>
       </div>
       <div className="fields">
       <label id="job">Job Title</label>
       <input type="text" placeholder="Job Title" id ="jobTitle"></input>
       </div>
        <div className="fields">
       <label id ="subGroup"> Empl Sub-group </label>
       <input type="text" placeholder="Sub-group" id ="empSubGroup"></input>
       </div>
        <div className="fields">
       <label id ="timesheet"> TimesheetComplaince</label>
       <input type="text" placeholder="TimesheetComplaince" id ="timesheetComplaince"></input>
       </div>
        <div className="fields">
       <label id ="supName"> SupervisorName </label>
       <input type="text" placeholder="Supervisor Name" id ="supervisorName"></input>
       </div>
        <div className="fields">
       <label id ="team"> ClientTeam</label>
       <input type="text" placeholder="Client Team" id ="clientTeam"></input>
       </div>
        <div className="fields">
       <label id ="email"> EmailId </label>
       <input type="email" placeholder="Email" id ="emailId"></input>
       </div>
        <div className="fields">
       <label id ="Bloc"> BaseLocation </label>
       <input type="text" placeholder="Base Location" id ="baseLocation"></input>
       </div>
       <div className="fields">
       <label id ="area"> PersonalArea </label>
       <input type="text" placeholder="Personal Area" id ="personalArea"></input>
       </div>
       <div className="fields">
       <label id ="loc"> Location </label>
       <input type="text" placeholder="location" id ="location"></input>
       </div>
       <div className="fields">
       <label id ="local"> LocalId </label>
       <input type="text" placeholder="Local Id" id ="localId"></input>
       </div>
       <button id="btn">Submit</button>
       </div>
      </form>
       </div>
         
  );
}
export default Add;