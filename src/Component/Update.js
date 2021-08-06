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
     <div className="ufrm">
	 <h3 id="p">This page is for updating the employee details stored in the database.</h3>
	 </div>
	 <br/>
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