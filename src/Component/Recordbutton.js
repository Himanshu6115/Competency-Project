import '../CSS/Recordbutton.css';
import Navbartwo from './Navbartwo.js';
import Footer from './Footer.js';
import { useHistory }  from 'react-router-dom';

function Recordbutton () {

    let history = useHistory();

    function DisplayAll(){
        history.push('/records/allrecords')
    }
    function DisplayOne(){
        history.push('/records/onerecord')
    }

    function DisplayNotSubmitted(){
        history.push('/records/notsubmitted')
    }
     function DisplayNotApproved(){
        history.push('/records/notapproved')
    }
    return (
    <div class="RB" >
    <section className="header">
      <section className="header-top">
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbartwo />
          </section>          
        </section>
        </section>          
        </section>
		<div className="afrm">
		<h3 id="paraga">Displaying the details of the employees  </h3>
		<h3 id="paraga">i.e(all employee's,single employee,not submitted and not approved employee's)</h3>
		<h3 id="paraga">based on the requirement and getting the email id's of the those Employee's.</h3>
		<h3 id="paraga">Click on the button's according to the requirement.</h3>
		</div>
        <div className="display">
           <h1 id="heading">SELECT DISPLAY</h1>
            <div class="btn-group">
            <button onClick={()=>{DisplayAll();}}>DISPLAY ALL EMPLOYEE</button>
            <br/>
            <button onClick={()=>{DisplayOne();}}>DISPLAY SINGLE EMPLOYEE</button>
            <br/>
            <button onClick={()=>{DisplayNotSubmitted();}}> NOT SUBMITTED TIMESHEET</button>
            <br/>
            <button onClick={()=>{DisplayNotApproved();}}> NOT-APPROVED TIMESHEET</button>
            </div>
            </div>
            <div className="ft">
            <Footer />
            </div>
            </div>  
  );
}

 

 

 

export default Recordbutton;