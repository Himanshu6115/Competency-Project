import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Navbartwo from './Navbartwo.js';

 

function Update() {
    var [globalID,setGlobalID]=useState("");
        var [empName,setEmpName]=useState("");
        var [gender,setGender]=useState("");
        var [jobTitle,setJobTitle]=useState("");
        var [empSubGroup,setEmpSubGroup]=useState("");
        var [timesheetComplaince,setTimesheetCompilance]=useState("");
        var [supervisorName,setSupervisorName]=useState("");
        var [clientTeam,setClientTeam]=useState("");
        var [emailId,setEmailId]=useState("");
        var [baseLocation,setBaseLocation]=useState("");
        var [personalArea,setPersonalArea]=useState("");
        var [location,setLocation]=useState("");
        var [localId,setLocalId]=useState("");
        
        
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

       let result = axios.put('http://localhost:8080/updateEmployee',item);
      console.log("result",result);
      alert("Data Updated successfully");
     
      }
     }
     
    var id;
    var a;
 const url = 'http://localhost:8080/allemployee'
 const [data, setData] = useState([])
 useEffect(() => {
 axios.get(url).then(json => setData(json.data))
 }, [])

 function renderTable ()  {
 return data.map(user => {
     
    if(user.globalId==globalID)
 { 
    empName=setEmpName(user.empName);
    jobTitle=setJobTitle(user.JobTitle);
    emailId=setEmailId(user.emailId);
    gender=setGender(user.gender);
    empSubGroup=setEmpSubGroup(user.empSubGroup);
    timesheetComplaince=setTimesheetCompilance(user.timesheetComplaince);
    supervisorName=setSupervisorName(user.supervisorName);
    clientTeam=setClientTeam(user.clientTeam);
    baseLocation=setBaseLocation(user.baseLocation);
    personalArea=setPersonalArea(user.personalArea);
    location=setLocation(user.location);
    localId=setLocalId(user.localId);
 }

 })
 }
 function display()
 {
     a=renderTable();
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
     
      <div className ="form">
       <div className="fields">
       <label id="id">Global ID*</label>
       <input type="text" placeholder="Global ID" id ="globalID" value={globalID}  onChange={(e)=> setGlobalID(e.target.value)}></input>
       <button id="btn7"onClick={()=>{display();}}>Search</button>
       <br />
       </div> 
        <div className="fields">
       <label id="emplName">Empl Name </label>
       <input type="text" placeholder="Employee Name" id ="empName" value={empName} onChange={(e)=> setEmpName(e.target.value)}></input>
       </div>
        <div className="fields">
       <label id="gen">Gender </label>
       <input type="text" placeholder="Gender" id ="gender" value={gender} onChange={(e)=> setGender(e.target.value)}></input>
       </div>
       <div className="fields">
       <label id="job">Job Title</label>
       <input type="text" placeholder="Job Title" id ="jobTitle" value={jobTitle} onChange={(e)=> setJobTitle(e.target.value)}></input>
       </div>
        <div className="fields">
       <label id ="subGroup"> Empl Sub-group </label>
       <input type="text" placeholder="Sub-group" id ="empSubGroup" value={empSubGroup} onChange={(e)=> setEmpSubGroup(e.target.value)}></input>
       </div>
        <div className="fields">
       <label id ="timesheet"> TimesheetComplaince</label>
       <input type="text" placeholder="TimesheetComplaince" id ="timesheetComplaince" value={timesheetComplaince} onChange={(e)=> setTimesheetCompilance(e.target.value)}></input>
       </div>
        <div className="fields">
       <label id ="supName"> SupervisorName </label>
       <input type="text" placeholder="Supervisor Name" id ="supervisorName" value={supervisorName} onChange={(e)=> setSupervisorName(e.target.value)}></input>
       </div>
        <div className="fields">
       <label id ="team"> ClientTeam</label>
       <input type="text" placeholder="Client Team" id ="clientTeam" value={clientTeam} onChange={(e)=> setClientTeam(e.target.value)}></input>
       </div>
        <div className="fields">
       <label id ="email"> EmailId</label>
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
     
       </div>
 
 )
}
export default Update;