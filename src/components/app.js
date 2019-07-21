import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavigationContainer from './navigation/navigation-container';
import home from './pages/home';
import store from './pages/store';
import room from './pages/room';
import signUp from './pages/sign-up';
import login from './pages/login';


import Icons from '../helpers/icons';

export default class App extends Component {
  constructor(props){
    super(props);

    Icons();

    this.state = {
      loggedInStatus: '',
      gold: ''
    }
  }
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path = "/" component = {home} />
              <Route path = "/store" component = {store} />
              <Route path = "/room" component = {room} />
              <Route path = "/sign-up" component = {signUp} />
              <Route path = "/login" component = {login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
