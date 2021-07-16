import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Component/Login.js';
import Home from './Component/Home.js';
import Error from './Component/Error.js';
import Add from './Component/Add.js';
import Button from './Component/Button.js';
import Multiuser from './Component/Multiuser.js';
import Delete from './Component/Delete.js';
import Recordbutton from './Component/Recordbutton.js';
import ProtectedRoute from './Component/ProtectedRoute.js';
import Fetchdata from './Component/Fetchdata.js';
import SingleEmployee from './Component/SingleEmployee.js';
import Update from './Component/Update.js'
import Notsubmitted from './Component/Notsubmitted.js';
import NotApproved from './Component/NotApproved.js';

function App () {
    const[isAuth,setAuth]=useState(true);
    return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path="/" component={Login} />
    <ProtectedRoute exact path="/home" component={Home} isAuth={isAuth}/>
    <Route exact path="/update" component={Update} />
    <Route exact path="/delete" component={Delete} />
    <Route exact path="/records" component={Recordbutton} />
    <Route exact path="/records/allrecords" component={Fetchdata} />
    <Route exact path="/records/onerecord" component={SingleEmployee} />
    <Route exact path="/records/notsubmitted" component={Notsubmitted} />
    <Route exact path="/records/notapproved" component={NotApproved} />

    <Route exact path="/choice" component={Button} />
	<Route exact path="/choice/addRecord" component={Add} />
    <Route exact path="/choice/Multiuser" component={Multiuser} />
    <Route component={Error}/>
    </Switch>
    </Router>
    </div>
    
  );


}

export default App;


