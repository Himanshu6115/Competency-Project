import Navbartwo from './Navbartwo.js';
import '../CSS/Header.css';
import React, {useState, useEffect} from 'react';
 

function Add () {
    const [globalID,setGlobalID]=useState("");
        const [empName,setEmpName]=useState("");
        const [gender,setGender]=useState("");
        const [jobTitle,setJobTitle]=useState("");
        const [empSubGroup,setEmpSubGroup]=useState("");
        const [timesheetComplaince,setTimesheetCompilance]=useState("");
        const [supervisorName,setSupervisorName]=useState("");
        const [clientTeam,setClientTeam]=useState("");
        const [emailId,setEmailId]=useState("");
        const [baseLocation,setBaseLocation]=useState("");
        const [personalArea,setPersonalArea]=useState("");
        const [location,setLocation]=useState("");
        const [localId,setLocalId]=useState("");
        
        
    async function uploaddata(){
       var item=
{
    "globalId": globalID,
    "empName": empName,
    "gender": gender,
    "jobTitle": jobTitle,
    "empSubGroup": empSubGroup,
    "timesheetComplaince": timesheetComplaince,
    "supervisorName": supervisorName,
    "clientTeam": clientTeam,
    "emailId": emailId,
    "baseLocation": baseLocation,
    "personalArea": personalArea,
    "location": location,
    "localId": localId
};

     if(globalID =="" || empName =="" || emailId ==""){
       alert("Please Enter Mandatory fields");
     }
     else{

       let result = await fetch("http://localhost:8080/insert",{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          "Accept":'application/json'
        },
         body:JSON.stringify(item)
        
      });

 

      result=await result.json();
      console.log("result",result);
      if(result.status=="500,DB2 Error")
      {
          alert(result.message);
      }
      else
      {
          alert("Employee details added sucessfully");
      }
     
      }
     }

 

  return (
     <div className="Reg">
     <section className="header">
      <section className="header-top">
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbartwo />
          </section>          
        </section>
        </section>          
        </section> 
      <form>
      <div className ="forms">
       <div className="fields">
       <label id="id">Global ID* </label>
       <input type="text" placeholder="Global ID" id ="globalID" value={globalID}  onChange={(e)=> setGlobalID(e.target.value)}></input>
       </div> 
        <div className="fields">
       <label id="emplName">Empl Name* </label>
       <input type="text" placeholder="Employee Name" id ="empName" value={empName} onChange={(e)=> setEmpName(e.target.value)}></input>
       </div>
	  
        <div className="fields">
		<label id="gen">Gender </label>
		<select name="selectList" id="selectList" onChange={(e)=> setGender(e.target.value)}>
			<option selected value="Select" >Select </option>
  			<option >M</option>
 			<option >F</option>
	   </select>
       </div>
	   
       <div className="fields">
       <label id="job">Job Title</label>
	   <select name="selectList" id="selectList" onChange={(e)=> setJobTitle(e.target.value)}>
			<option selected value="Select" >Select </option>
 			<option >Intern</option>
 			<option >Jr.Consultant/Engineer</option>
			<option >Network Engineer</option>
			<option >Principal Systems Engineer</option>
			<option >Senior Engineer - Testing</option>
			<option >Senio Engineering Project Manager</option>
			<option >Senior Software Engineer</option>
			<option >Senior Technical Engineer</option>
			<option >Senior Technical Leader</option>
			<option >Software Engineer</option>
			<option >Software Engineer - Fresher</option>
			<option >Team Leader</option>
			<option >Technical Lead</option>
			<option >Technical Leader</option>
			<option >Technical Leader - Testing</option>
			<option >Test Engineer - Fresher</option>
	   </select>
       </div>
	   
        <div className="fields">
       <label id ="subGroup"> Empl Sub-group </label>
		<select name="selectList" id="selectList" onChange={(e)=> setEmpSubGroup(e.target.value)}>
			<option selected value="Select" >Select </option>
 		<option >E2</option>
 			<option >E3</option>
			<option >E4</option>
			<option >E5</option>
			<option >E6</option>
	   </select>
       
       </div>
	   
        <div className="fields">
       <label id ="timesheet"> TimesheetComplaince</label>
	   <select name="selectList" id="selectList" onChange={(e)=> setTimesheetCompilance(e.target.value)}>
			<option selected value="Select" >Select </option>
 			<option >Yes</option>
 		<option >No</option>
	   </select>
       </div>
	   
        <div className="fields">
       <label id ="supName"> SupervisorName </label>
	   <select name="selectList" id="selectList" onChange={(e)=> setSupervisorName(e.target.value)}>
			<option selected value="Select" >Select </option>
 			<option >Lovelesh Pandy</option>
 			<option >Sukesh Srivastava</option>
			<option >Tanuj Agrawal</option>
			<option >Vivekanandhan Subramanian</option>
	   </select>
       </div>
	   
        <div className="fields">
       <label id ="team"> ClientTeam</label>
       <input type="text" placeholder="Client Team" id ="clientTeam" value={clientTeam} onChange={(e)=> setClientTeam(e.target.value)}></input>
       </div>
        <div className="fields">
       <label id ="email"> EmailId* </label>
       <input type="email" placeholder="Email" id ="emailId" value={emailId} onChange={(e)=> setEmailId(e.target.value)}></input>
       </div>
        <div className="fields">
       <label id ="Bloc"> BaseLocation </label>
       <input type="text" placeholder="Base Location" id ="baseLocation"value={baseLocation} onChange={(e)=> setBaseLocation(e.target.value)}></input>
       </div>
       <div className="fields">
       <label id ="area"> PersonalArea </label>
       <input type="text" placeholder="Personal Area" id ="personalArea" value={personalArea} onChange={(e)=> setPersonalArea(e.target.value)}></input>
       </div>
       <div className="fields">
       <label id ="loc"> Location </label>
       <input type="text" placeholder="location" id ="location" value={location} onChange={(e)=> setLocation(e.target.value)}></input>
       </div>
       <div className="fields">
       <label id ="local"> LocalId </label>
       <input type="text" placeholder="Local Id" id ="localId" value={localId} onChange={(e)=> setLocalId(e.target.value)}></input>
       </div>
       <button id="btn" onClick= {() => {uploaddata();}}>Submit</button>
       </div>
      </form>
       </div>
         
  );
}
export default Add;