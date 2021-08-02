import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import '../CSS/SingleEmployee.css';
import Navbartwo from './Navbartwo.js';

function SingleEmployee() {
    var id;
    var a;
    const [globalID,setGlobalID]=useState("");
 const url = 'http://localhost:8080/allemployee'

 

 const [data, setData] = useState([])

 

 useEffect(() => {
 axios.get(url).then(json => setData(json.data))
 }, [])

 

 function renderTable ()  {
 return data.map(user => {
      
    if(user.globalId==globalID)
 { 
     
 return (
 
 <tr>
 <td>{user.globalId}</td>
 <td>{user.empName}</td>
 <td>{user.gender}</td>
 <td>{user.jobTitle}</td>
 <td>{user.empSubGroup}</td>
 <td>{user.timesheetComplaince}</td>
<td>{user.supervisorName}</td>
<td>{user.clientTeam}</td>
<td>{user.clientEmail}</td>
<td>{user.date}</td>
<td>{user.emailId}</td>
<td>{user.empGroup}</td>
<td>{user.location}</td>
 </tr>
 
 
 )
 }
 
 })
 }
 function display()
 {
     a=renderTable();
 }
 

 

 return (
 <div>
 <div className="single">
 <div className="up">
  <section className="header">
      <section className="header-top">
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbartwo />
          </section>          
        </section>
        </section>          
        </section>
      </div>
 <h1 id="title">EMPLOYEE DETAILS</h1>
 <div className="fields">
 <label id="id">Global ID </label>
 <input type="text" placeholder="Global ID" id ="globalID" value={globalID}  onChange={(e)=> setGlobalID(e.target.value)}></input>
 {display()}
<br/>
       
 </div> 
 <table id="users">
 <thead>
 <tr>
 <th>GLOBAL-ID</th>
 <th>EMPLOYEE NAME</th>
 <th>GENDER</th>
 <th>JOB-TITLE</th>
 <th>EMPLOYEE SUBGROUP</th>
 <th>TIMESHEET</th>
 <th>SUPERVISOR</th>
 <th>CLIENT-TEAM</th>
 <th>CLIENT-EMAIL</th>
 <th>DATE</th>
 <th>EMAIL-ID</th>
 <th>Employee-Group</th>
 <th>LOCATION</th>
 </tr>
 </thead>
 <tbody>{a}</tbody>
 </table>

 </div>

 </div>
 
 )
}
export default SingleEmployee;