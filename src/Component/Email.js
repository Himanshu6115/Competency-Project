import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


function Email() {
    var id;
    var a;
    const [globalID,setGlobalID]=useState("");
 const url = 'http://localhost:8080/getAllEmployeeDetails'

 

 const [data, setData] = useState([])

 

 useEffect(() => {
 axios.get(url).then(json => setData(json.data))
 }, [])

 

 function renderTable ()  {
 return data.map(user => {
     id=id+user.emailId+";"
     console.log(id)
     

 

 
 })
 }
 function display()
 {
     a=renderTable();
 }
 

 

 return (
 <div>
 <h1 id="title">EMPLOYEES EMAIL ID'S</h1>
      {display()}
 
 <p id="h"> {id}</p>
 </div>
 
 )
}
export default Email;