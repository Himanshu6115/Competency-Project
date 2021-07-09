import React, { useState } from "react";
import Navbar from './Navbar.js';
import * as XLSX from "xlsx";
import '../CSS/Multiuser.css';
import Footer from './Footer.js';

class Multiuser extends React.Component {
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
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      this.convertToJson(data); 
    };
    reader.readAsBinaryString(f);
  }

 

   async convertToJson(csv) {
    var lines = csv.split("\n");

 

    var result = [];

 

    var headers = lines[0].split(",");

 

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

 

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

 

      result.push(obj);
    }
    result.length=result.length-1;
    for(var i=0;i<result.length;i++)
    {
        var item=result[i];
        var res = await fetch("http://localhost:8080/insert",{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          "Accept":'application/json'
        },
         body:JSON.stringify(item)
        
        });    
      
    }
    
  }

  render() {
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
        <input type="file" id="file" useref="fileUploader"
          onChange={this.filePathset.bind(this)}
        />
        <button id="btn4"
          onClick={() => {
            this.readFile();
            alert("fileUploaded")
          }}
        >
          Upload File
        </button>
        <Footer />
      </div>
    );
  }
}

 

export default Multiuser;