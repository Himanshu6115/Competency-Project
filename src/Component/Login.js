import '../CSS/Login.css';
import React, {useState, useEffect} from 'react';
import { useHistory, withRouter}  from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';


function Login () 
    {
     
      let history = useHistory();
        const[isAuth,setAuth]=useState(true);
      const [username,setUsername]=useState("");
      const [password,setPassword]=useState("");


  async function Log(){
      console.log(username,password);
      let item = {username,password};
      console.log(item);
      let result = await fetch("http://localhost:8080/login",{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          "Accept":'application/json'
        },
         body:JSON.stringify(item)
        
      });

      result=await result.json();
      console.log("result",result);
      localStorage.setItem("user-info",JSON.stringify(result))
      if (username=="admin" && password=="admin") 
      {
        history.push("/home")
      }
      else{
        alert("Please enter correct user name & Password");
      }
      
     }
    return (
    <div className="Login">
    <div className="Form">
    <div className="sign-in">
    <h2>Login</h2>
     </div>
    <div className="seperate">
    <div className="group">
    <label id="labeling">Username</label>
    <div className="us">
    <i>
    < AccountBoxIcon />   
    </i>
    </div>
    <input type ="Text" placeholder="email" id="username" value={username} onChange={(e)=> setUsername(e.target.value)}></input> 
    </div>
    <div className="group">
    <label id="labeling">Password</label>
    <div className="pass">
    <i>
    <LockIcon/>
    </i>
    </div>
    <input type ="password" placeholder="password"  id="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>   
    </div>
    <div className="forget">
    <a href={'#'}>
    <p>forget password?</p>
    </a>
    </div> 
   <button id ="btn1" onClick= {() => {Log();}}>Submit</button>
    </div>   
    </div>
    </div>
    
  );

    }


export default withRouter(Login);