import React from 'react';
import '../CSS/AddRecord.css';


function AddRecord () {
    return (
    <div className="Reg">
      <form>
      <div className ="forms">
       <div className="fields">
       <label >globalID </label>
       <input type="text" placeholder="UserName" id ="ID"></input>
       </div> 
        <div className="fields">
       <label id="email">Empl Name </label>
       <input type="email" placeholder="example.com" id ="empl"></input>
       </div>
         <div className="fields">
       <label id="desg">Gender </label>
       <input type="Password" placeholder="Designation" id ="gen"></input>
       </div>
       <div className="fields">
       <label id="desg">Job Title</label>
       <input type="Password" placeholder="Department" id ="job"></input>
       </div>
        <div className="fields">
       <label id ="pwd"> Empl Sub-group </label>
       <input type="Password" placeholder="Password" id ="sub-group"></input>
       </div>
        <div className="fields">
       <label id ="pwd"> TimesheetComplaince</label>
       <input type="Password" placeholder="Password" id ="timesheet"></input>
       </div>
        <div className="fields">
       <label id ="pwd"> SupervisorName </label>
       <input type="Password" placeholder="Password" id ="sup"></input>
       </div>
        <div className="fields">
       <label id ="pwd"> ClientTeam</label>
       <input type="Password" placeholder="Password" id ="team"></input>
       </div>
        <div className="fields">
       <label id ="pwd"> EmailId </label>
       <input type="Password" placeholder="Password" id ="email"></input>
       </div>
        <div className="fields">
       <label id ="pwd"> BaseLocation </label>
       <input type="Password" placeholder="Password" id ="location"></input>
       </div>
       <div className="fields">
       <label id ="pwd"> personalArea </label>
       <input type="Password" placeholder="Password" id ="area"></input>
       </div>
       <div className="fields">
       <label id ="pwd"> location </label>
       <input type="Password" placeholder="Password" id ="loc"></input>
       </div>
       <div className="fields">
       <label id ="pwd"> localId </label>
       <input type="Password" placeholder="Password" id ="local"></input>
       </div>
       <button id="btn">Submit</button>
       </div>
      </form>
    </div>
    
  );

  
}
export default AddRecord;