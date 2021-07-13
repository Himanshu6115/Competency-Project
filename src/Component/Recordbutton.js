import '../CSS/Recordbutton.css';
import Navbar from './Navbar.js';
import { useHistory }  from 'react-router-dom';

function Recordbutton () {

    let history = useHistory();

    function DisplayAll(){
        history.push('/records/allrecords')
    }
    function DisplayOne(){
        history.push('/records/onerecord')
    }
     function Displaymail(){
        history.push('/records/mails')
    }
    return (
    <div class="all" >
    <section className="header">
      <section className="header-top">
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>          
        </section>
        </section>          
        </section>
        <div className="display">
           <h1>SELECT DISPLAY</h1>
            <div class="btn-group">
            <button onClick={()=>{DisplayAll();}}>DISPLAY ALL</button>
            <br/>
            <button onClick={()=>{DisplayOne();}}>DISPLAY ONE</button>
            <br/>
            <button>DISPLAY NOT SUBMITTED</button>
            <br/>
            <button>DISPLAY NOT-APPROVED</button>
            <br/>
            <button onClick={()=>{Displaymail();}}>E-MAIL LIST</button>
            </div>
            </div>
            </div>  
  );
}

 

 

 

export default Recordbutton;