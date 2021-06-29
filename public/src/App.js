
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Component/Login.js';
import Home from './Component/Home.js';
import Error from './Component/Error.js';
import Add from './Component/Add.js';



function App () {
    return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={Home} />
	<Route exact path="/add" Component={Add}/>
    <Route component={Error}/>
    </Switch>
    </Router>
    </div>
    
  );


}

export default App;


