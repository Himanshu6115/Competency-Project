
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Component/Login.js';
import Registration from './Component/Registration.js';
import Error from './Component/Error.js';


function App () {
    return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/login/registration" component={Registration} />
    <Route component={Error}/>
    </Switch>
    </Router>
    </div>
    
  );


}

export default App;


