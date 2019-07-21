import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavigationContainer from './navigation/navigation-container';
import home from './pages/home';
import Store from './pages/Store';
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
      gold: '400'
    }

    this.handleGoldChange = this.handleGoldChange.bind(this);
  }

  handleGoldChange(change){
    this.setState({
      gold: this.state.gold-change
    })
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path = "/" component = {home} />
              <Route path = "/store" render = {props => (
                <Store
                  {...props}
                  loggedInStatus = {this.state.loggedInStatus}
                  gold = {this.state.gold}
                  handleGoldChange = {this.handleGoldChange}
                />
              )} />
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
