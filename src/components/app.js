import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import Store from './pages/store';
import Room from './pages/room';
import SignUp from './pages/sign-up';
import Login from './pages/login';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <Router>
          <div>
            <Switch>
              <Route exact path = "/" Component = {Home} />
              <Route path = "/store" Component = {Store} />
              <Route path = "/room" Component = {Room} />
              <Route path = "/sign-up" Component = {SignUp}/>
              <Route path = "/login" Component = {Login}/>
            </Switch>
          </div>
        </Router>


        <Home />
      </div>
    );
  }
}
