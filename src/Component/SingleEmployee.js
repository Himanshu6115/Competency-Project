import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import '../CSS/SingleEmployee.css';
import Navbar from './Navbar.js';

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
     id=id+user.emailId+";"
    
     
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
<td>{user.emailId}</td>
<td>{user.baseLocation}</td>
<td>{user.location}</td>
<td>{user.localId}</td>
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
  <section className="header">
      <section className="header-top">
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>          
        </section>
        </section>          
        </section>
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
 <th>GLOBALID</th>
 <th>EMPLOYEE NAME</th>
 <th>GENDER</th>
 <th>JOBTITLE</th>
 <th>EMPLOYEE SUBGROUP</th>
 <th>TIMESHEETE</th>
 <th>SUPERVISOR</th>
 <th>CLIENTTEAM</th>
 <th>EMAILID</th>
 <th>BASELOCATION</th>
 <th>LOCATION</th>
 <th>LOCALID</th>
 </tr>
 </thead>
 <tbody>{a}</tbody>
 </table>

 

 </div>
 
 )
}
export default SingleEmployee;