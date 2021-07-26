import React, { useState } from "react";
import Navbartwo from './Navbartwo.js';
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
    
        
        var res = await fetch("http://localhost:8080/addmultiple",{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          "Accept":'application/json'
        },
         body:JSON.stringify(result)
        
        }).then(response => response.json())
.then(response => {
             var ins="";
            for(var i=0;i<=response.length-2;i++)
            {
                ins=ins+"\n"+response[i].message;
            }
            
        
    
    if(response=="")
    {
        alert("all data inserted sucessfully");
    }
    else{
    alert("These data having global id mentioned are not added"+"\n"+ ins)}
    

 

});  
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
        <input type="file" id="file" useref="fileUploader"
          onChange={this.filePathset.bind(this)}
        />
        <button id="btn4"
          onClick={() => {
            this.readFile();
            
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