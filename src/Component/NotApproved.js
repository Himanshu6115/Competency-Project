import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Navbartwo from './Navbartwo.js';
import '../CSS/NotApproved.css'; 

 

 
 function NotApproved() {
    var id ="";
    var a;
    
    const [supervisor,setsupervisor]=useState(null);
    const [data,setdata]=useState(null);
    

 

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8080/notApproved?supervisorName='+supervisor
    );
if(supervisor==null)
{alert("please enter the supervisor name");}
 

    setdata(response.data);
    
  };
  function dp(){
 if(id!="")
    {alert("E-mail Ids are copied")}
  else{
    alert("No Email to copy")
  }

} 

 

  return (
    <div className="App">
       <section className="header">
      <section className="header-top">
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbartwo />
          </section>          
        </section>
        </section>          
        </section>
      <label id="id">Global ID </label>
       <input type="text" placeholder="Global ID" id ="globalID" value={supervisor}  onChange={(e)=> setsupervisor(e.target.value)}></input>
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
        <br />
        <button id="btn11"
  onClick={() => {navigator.clipboard.writeText(id); dp();} } >
  Copy E-mail
</button>

        <br />
      </div>
        <table id="users">
    <thead>
    <tr>
    <th>GLOBALID</th>
    <th>EMPLOYEE NAME</th>
    <th>EMAILID</th>
 
 </tr>
 </thead>
 <tbody>
      
        {data &&
          data.map(d => {
            if(d.email!="")
            {
                id=id+d.email+";"
                console.log(id)
            }

 

            return (
         <tr>
        <td>{d.empId}</td>
        <td>{d.empName}</td>
        <td>{d.email}</td>
        </tr>
            );
          })}
</tbody>
 </table>
      <br/>
      <br/>
      <br/>
      <br/>
      

 

      
    </div>
  );
}
export default NotApproved;





