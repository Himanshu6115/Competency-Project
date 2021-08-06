import React from 'react';
import Header from '../Component/Header.js';
import Footer from '../Component/Footer.js';
import '../CSS/Home.css';

function Home () {
    return (
    <div className="home">
    <Header />
	<div className="hfrm">
	<br/>
        <h3 id="parag">This web application is useful for filtering the timesheet responses based on the requirement </h3>
		<h3 id="parag">and getting the details of the employees who has not submitted and not approved.</h3>
		<h3 id="parag">And to mainpulate the data according to the requirement.</h3>
		</div>
    <Footer />    
    </div>
    
  );


}

export default Home;