import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Navbar from './Navbar.js';
 
import '../CSS/NotApproved.css'; 
 

 

function NotApproved() {
    var id ="";
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
<td>{user.emailId}</td>

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
       <input type="text" placeholder="Global ID" id ="globalID" value={supervisor}  onChange={(e)=> setsupervisor(e.target.value)}></input>

 

<br/>
       
 </div> 
 <table id="users">
 <thead>
 <tr>
 <th>GLOBALID</th>
 <th>EMPLOYEE NAME</th>
 <th>EMAILID</th>
 
 </tr>
 </thead>
 <tbody>{a}</tbody>
 </table>
<br />
<br />
<br />
<br />
<table id="users">
 <thead>
 <tr>
 <th>Email-Ids</th>
 </tr>
 </thead>
 <tbody>{id}</tbody>
 </table>
 <div className="ns">
 <button
  onClick={() =>  navigator.clipboard.writeText(id) } >
  Copy
</button>

 </div>


 

 </div>
 
 )
}
export default NotApproved;