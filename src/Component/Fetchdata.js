import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import '../CSS/Fetchdata.css';
import Navbartwo from './Navbartwo.js';

function Fetchdata() {
 const url = 'http://localhost:8080/allemployee'

 const [data, setData] = useState([])

 useEffect(() => {
 axios.get(url).then(json => setData(json.data))
 }, [])

 const renderTable = () => {
 return data.map(user => {
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
<td>{user.emailId}</td>
<td>{user.empGroup}</td>
<td>{user.location}</td>
 </tr>
     )
 })
 }

 return (
 <div>
 <div className="head">
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
        <div className="Top">
 <h1 id="title">EMPLOYEE DETAILS</h1>

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
 <th>EMAIL-ID</th>
 <th>Employee-Group</th>
 <th>LOCATION</th>
 </tr>
 </thead>
 <tbody>{renderTable()}</tbody>
 </table>
 </div>
 </div>
 )
}
export default Fetchdata;