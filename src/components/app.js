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
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/store" component = {Store} />
              <Route path = "/room" component = {Room} />
              <Route path = "/sign-up" component = {SignUp}/>
              <Route path = "/login" component = {Login}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
