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
    <div class="all" >
    <section className="header">
      <section className="header-top">
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbartwo />
          </section>          
        </section>
        </section>          
        </section>
        <div className="display">
           <h1>SELECT DISPLAY</h1>
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