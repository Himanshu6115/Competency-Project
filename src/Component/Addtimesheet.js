import React, { useState } from "react";
import * as XLSX from "xlsx";
import Navbartwo from './Navbartwo.js';
import Footer from './Footer.js';
import '../CSS/NotApproved.css';
var a=0;
class Addtimesheet extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      file: "",
    };
  }


  handleClick(e) {
    this.refs.fileUploader.click();
  }

   filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    console.log(file);
    this.setState({ file });

    console.log(this.state.file);
  }

 
  readFile() {
	   a=1;
    var f = this.state.file;
    var name = f.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      console.log(evt.target.result);
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
     
     console.log(data);
     var FileSaver = require('file-saver');
     var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
     FileSaver.saveAs(blob, "Timesheet.csv");
      
    };
    reader.readAsBinaryString(f);
     
}
  

  render() {
    return (
      <div className="Multi">
         <section className="header">
      <section className="header-top">
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbartwo />
          </section>          
        </section>
        </section>          
        </section>
		<div className="addf">
		<br/>
		
		
        <h3 id="par"> Select the CSV file  and that file will be download in a downloads folder.</h3>
        </div>
		<button id="btn20"onClick={() => {if(a==1)
			  {
				this.readFile();  
			  }
			  else
			  {
				  alert("Please select the file and then click Upload");
		}}}>
         Download
        </button>
        <input type="file" id="file" useref="fileUploader"onChange={this.filePathset.bind(this)}></input>
        
        

        <div className ="foot">
        <Footer />
        </div>
       
      </div>
    );
  }
}

 

 

 

export default Addtimesheet;