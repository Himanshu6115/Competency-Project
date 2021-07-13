import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import '../CSS/Fetchdata.css';
import Navbar from './Navbar.js';

function Fetchdata() {
 const url = 'http://localhost:8080/getMappings'

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
<td>{user.emailId}</td>
<td>{user.baseLocation}</td>
<td>{user.location}</td>
<td>{user.localId}</td>
 </tr>
 )
 })
 }

 return (
 <div className="Top">
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
 <tbody>{renderTable()}</tbody>
 </table>
 </div>
 )
}
export default Fetchdata;