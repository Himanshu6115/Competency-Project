import "../CSS/Delete.css";
import React, {useState, useEffect} from 'react';
import * as XLSX from "xlsx";
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function Delete () {
    const [globalID,setGlobalID]=useState("");
        const [empName,setEmpName]=useState("");
           async function deleterecord() {
        await fetch('http://localhost:8080/delete/globalID', { method: 'DELETE' });
        
    }
           return(
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
        <div className="Del">
      <form>
     <div className ="forms">
       <div className="options">
       <label id="id">Global ID </label>
       <input type="text" placeholder="Global ID" id ="globalID" value={globalID}  onChange={(e)=> setGlobalID(e.target.value)} ></input>
       </div> 
        <div className="fields">
       <label id="emplName">Empl Name </label>
       <input type="text" placeholder="Employee Name" id ="empName" value={empName} onChange={(e)=> setEmpName(e.target.value)}></input>
       </div>
       <button id="btn"  onClick= {() => {deleterecord();}}>Delete</button>
       </div>
      </form>
</div>   
 <Footer />    
</div> 
   );
}
  

 

export default Delete;