import '../CSS/Login.css';
import React from 'react';
import { useHistory }  from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';

function Login () 
    {

      let history = useHistory();

      function Redirecting (){
		 const i=0;
		  if(i==0)
		  {
			 history.push("/home") 
		  }
		  else{
			  history.push("/");
		  }

      }
    return (
    <div className="Login">
    <form>
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
    <input type ="Text" placeholder="email" id="userName"></input> 
    </div>
    <div className="group">
    <label id="labeling">Password</label>
    <div className="pass">
    <i>
    <LockIcon/>
    </i>
    </div>
    <input type ="password" placeholder="password" id="userPassword"></input>   
    </div>
    <div className="forget">
    <a href={'#'}>
    <p>forget password?</p>
    </a>
    </div> 
   <button id ="btn1" onClick= {() => {Redirecting();}}>Submit</button>
    </div>   
    </form>
    </div>
    
  );

    }


export default Login;