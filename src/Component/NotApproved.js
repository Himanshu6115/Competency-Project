import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Navbartwo from './Navbartwo.js';
import '../CSS/NotApproved.css'; 

 

 
 function Notsubmitted() {
    var id ="";
    var a;
    
    var [supervisor,setsupervisor]=useState(null);
    var [data,setdata]=useState(null);
    

 

  var fetchData = async () => {
    var response = await axios.get(
      'http://localhost:8080/notApproved?supervisorName='+supervisor
    );

 if(supervisor==null)
{alert("Select the Supervisor name ");}

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
		<select name="selectList" id="selectList" onChange={(e)=> setsupervisor(e.target.value)
		}>
		<option selected value="Select SupervisorName" >Select SupervisorName</option>
   <option >Sukesh Srivastava</option>
   <option >Lovelesh Pandya</option>
</select>
      
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
         
        <button id="btn11"
  onClick={() =>  {navigator.clipboard.writeText(id); dp();} } >
  Copy E-mail
</button>
        <br />
      </div>
        <table id="users">
    <thead>
    <tr>
    <th id="K">GLOBALID</th>
    <th>EMPLOYEE NAME</th>
     <th>WEEK</th>
    <th>EMAILID</th>
 
 </tr>
 </thead>
 <tbody>
      
        {
			
			data &&
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
        <td>{d.week}</td>
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
export default Notsubmitted;