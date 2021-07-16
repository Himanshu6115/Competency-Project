import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Navbar from './Navbar.js'; 
 

function NotApproved() {
    var id;
    var a;
    const [supervisor,setsupervisor]=useState("");
    var n="'";
    n=supervisor
 const url = 'http://localhost:8080/notSubmitted?supervisorName='+n

 

 
console.log(n);
 console.log(url);
 var m=String(supervisor);
 n=n+"'"
 const [data, setData] = useState([])
 
 useEffect(() => {
 axios.get('http://localhost:8080/notApproved', {
    params: {
    supervisorName:"Sukesh Srivastava"
    }
  }).then(json => setData(json.data))
 }, [])

 

 function renderTable ()  {
 return data.map(user => {
     id=id+user.emailId+";"
     console.log(id)
     
     
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
 
 
 })
 }

 

     a=renderTable();
 
console.log(data);
 
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
 <h1 id="title">EMPLOYEE DETAIL</h1>
 <div className="fields">
       <label id="id">Global ID </label>
       <input type="String" placeholder="Global ID" id ="globalID" value={supervisor}  onChange={(e)=> setsupervisor(e.target.value)}></input>

 

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
export default NotApproved;