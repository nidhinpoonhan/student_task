import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './screens/NotFound/NotFound';
import Login from './screens/Login/Login';
import Dashboard from './screens/Dashboard/Dashboard';
import StudentDetails from './screens/StudentDetails/StudentDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/student/:id" component={StudentDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
