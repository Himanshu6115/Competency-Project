import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Component/Login.js';
import Home from './Component/Home.js';
import Error from './Component/Error.js';
import Add from './Component/Add.js';
import Button from './Component/Button.js';
import Multiuser from './Component/Multiuser.js'
import ProtectedRoute from './Component/ProtectedRoute.js';


function App () {
    const[isAuth,setAuth]=useState(true);
    return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path="/" component={Login} />
    <ProtectedRoute exact path="/home" component={Home} isAuth={isAuth}/>
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


