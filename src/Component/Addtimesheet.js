import React, { useState } from "react";
import * as XLSX from "xlsx";
import Navbartwo from './Navbartwo.js';
import Footer from './Footer.js';
import '../CSS/NotApproved.css';

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
        <input type="file" id="file" useref="fileUploader"onChange={this.filePathset.bind(this)}></input>
        
        <button id="btn20"onClick={() => {this.readFile();alert("fileUploaded")}}>
          Upload File
        </button>

        <div className ="foot">
        <Footer />
        </div>
       
      </div>
    );
  }
}

 

 

 

export default Addtimesheet;