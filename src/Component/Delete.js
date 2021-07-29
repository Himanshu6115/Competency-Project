import "../CSS/Delete.css";
import React, {useState, useEffect} from 'react';
import * as XLSX from "xlsx";
import Navbartwo from './Navbartwo.js';
import Footer from './Footer.js';
import SingleEmployee from './SingleEmployee.js';


function Delete () {
    const [globalID,setGlobalID]=useState("");
        const [empName,setEmpName]=useState("");
           async function deleterecord() {
       
        console.log( await fetch('http://localhost:8080/delete?Id='+globalID, { method: 'DELETE' }));
        alert("Data is Deleted")
    }
          async function checkrecord() {

 

            if(globalID==""){
              alert("Please Enter ID to check Record");
            }
            else{
            let item = {globalID};
        let result = await fetch('http://localhost:8080/'+globalID, {
        method:'GET',
       
         
      });
        body:JSON.stringify(item)
        result=await result.json();
         //console.log("result",result);
          let data=JSON.stringify(result);
           console.log(data)

 

    const confirmBox = window.confirm("Are You sure you want to delete this data? "+"\n"+ "GlobalID :"+result.globalId+"\n"+"Name:"+result.empName+"\n"+"EmailId :"+result.emailId+"\n"+"Supervisor Name :"+result.supervisorName)
    if (confirmBox === true) {
     deleterecord();
    }
         
    }
  }
    
           return(
        <div className="del">

        <section className="header">
      <section className="header-top">
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbartwo />
          </section>          
        </section>
        </section>          
        </section>
       
        <div className="Del">
        
     <div className ="frm">

 

       <div className="options">
       <label id="Glb">Global ID </label>
       <input type="text" placeholder="Global ID" id ="globalId" value={globalID}  onChange={(e)=> setGlobalID(e.target.value)} ></input>
       </div> 
        
       <div>
       <button id="btn6"  onClick= {() => {checkrecord();}}>Delete Record</button>
       </div>
       </div>
     
    
</div>   
<div className="foo">
<Footer />
</div>
 

</div> 
   );
}
  

 

 

 

export default Delete;