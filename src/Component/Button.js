import React from 'react';
import Navbar from './Navbar.js';
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
            <Navbar />
          </section>          
        </section>
        </section>          
        </section>
            <div>
           <button id="btn2"onClick={()=>{Singleuser();}}>Add Single Employee</button>
           </div>
               <div>
            <button id="btn3"onClick={()=>{Mutiple();}}> Add Multiple Employee's</button>    
            </div>
            <Footer />
    </div>
    
  );
}

 

export default Button;