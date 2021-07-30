import React from 'react';
import Navbartwo from './Navbartwo.js';
import Footer from './Footer.js';
import { useHistory }  from 'react-router-dom';
import '../CSS/Button.css';
function Button () {

let history = useHistory();

 function Singleuser () {
    history.push("/choice/addRecord")

  }

  function Mutiple () {
    history.push("/choice/Multiuser")
  }


    return (
    <div className="choice">
    
    <section className="header">
      <section className="header-top">
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbartwo />
          </section>          
        </section>
        </section>          
        </section>
        <h3>Click on a particular button to add Employee </h3>
            <div>
           <button id="btn2"onClick={()=>{Singleuser();}}>Add Single Employee</button>
           
            <button id="btn3"onClick={()=>{Mutiple();}}> Add Multiple Employee's</button>    
            </div>
            <div className="ter">
            <Footer />
            </div>
    </div>
    
  );
}

 

export default Button;