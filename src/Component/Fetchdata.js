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
 <td>{user.serialId}</td>
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
<td>{user.baseLocation}</td>
<td>{user.location}</td>
<td>{user.localId}</td>
<td>{user.personalArea}</td>
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
 <th>GLOBALID</th>
 <th>SERIALID</th>
 <th>EMPLOYEE NAME</th>
 <th>GENDER</th>
 <th>JOBTITLE</th>
 <th>EMPLOYEE SUBGROUP</th>
 <th>TIMESHEETE</th>
 <th>SUPERVISOR</th>
 <th>CLIENTTEAM</th>
 <th>CLIENTEMAIL</th>
 <th>DATE</th>
 <th>EMAILID</th>
 <th>Employee-Group</th>
 <th>BASELOCATION</th>
 <th>LOCATION</th>
 <th>LOCALID</th>
 <th>PERSONAL AREA</th>
 </tr>
 </thead>
 <tbody>{renderTable()}</tbody>
 </table>
 </div>
 </div>
 )
}
export default Fetchdata;