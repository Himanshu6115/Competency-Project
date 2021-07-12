import "../CSS/Delete.css";
import React, {useState, useEffect} from 'react';
import * as XLSX from "xlsx";
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function Delete () {
    const [globalID,setGlobalID]=useState("");
        const [empName,setEmpName]=useState("");
           async function deleterecord() {
        await fetch('http://localhost:8080/delete?Id='+globalID, { method: 'DELETE' });
        console.log(globalID,empName);
        alert("Data is Deleted")
    }
          async function checkrecord() {

            if(globalID==""){
              alert("Please Enter ID to check Record");
            }
            else{
            let item = {globalID,empName};
        let result = await fetch('http://localhost:8080/'+globalID, {
        method:'GET',
       
         
      });
        body:JSON.stringify(item)
        result=await result.json();
         //console.log("result",result);
          let data=JSON.stringify(result);
           console.log(data)
         alert("Are you sure you want to delete this data" +data);
    }
  }
    
           return(
        <div className="del">
        <section className="header">
      <section className="header-top">
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
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
        <div className="fields">
       <label id="emplname">Empl Name </label>
       <input type="text" placeholder="Employee Name" id ="empname" value={empName} onChange={(e)=> setEmpName(e.target.value)}></input>
       </div>
       <div>
       <button id="btn6"  onClick= {() => {checkrecord();}}>Check Record</button>
       </div>
       <button id="btn5"  onClick= {() => {deleterecord();}}>Delete</button>
       </div>
      
</div>   
 <Footer />    
</div> 
   );
}
  

 

export default Delete;