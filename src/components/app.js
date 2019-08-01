import React, { Component } from 'react';
import axios from 'axios';
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
import Login from './pages/Login';


import Icons from '../helpers/icons';

export default class App extends Component {
  constructor(props){
    super(props);

    Icons();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      loggedInAs: {

      },
      gold: '400'
    }

    this.handleGoldChange = this.handleGoldChange.bind(this);
    this.handleSuccsessfulLogin = this.handleSuccsessfulLogin.bind(this);
    this.handleUnsuccsessfulLogin = this.handleUnsuccsessfulLogin.bind(this);
    this.handleSuccsessfulLogout = this.handleSuccsessfulLogout.bind(this);
  }

// login code vvvvv

  handleSuccsessfulLogin(id){
    axios({
      method: "put",
      url: `https://to-do-list-back-end.herokuapp.com/users/${id}`,
      data: {loggedIn: 'LOGGED_IN'},
      withCredentials: true
    }).then(response =>{
      this.setState({
        loggedInStatus: "LOGGED_IN"
      })
    }).catch(error =>{
      console.log(error);
    })
  }

  handleUnsuccsessfulLogin(){
    this.checkLoginStatus()
    if(this.state.loggedInStatus === 'NOT_LOGGED_IN'){
      return;
    } else {
      axios({
        method: "put",
        url: `https://to-do-list-back-end.herokuapp.com/users/${this.state.loggedInAs.id}`,
        data: {loggedIn: 'NOT_LOGGED_IN'},
        withCredentials: true
      }).then(response =>{
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          loggedInAs: {}
        })
      }).catch(error =>{
        console.log(error);
      })
    }
  }

  handleSuccsessfulLogout(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus(){
    return axios.get("https://to-do-list-back-end.herokuapp.com/users/me",
    {withCredentials: true})
    .then(responce=> {
      console.log(responce)
      const loggedIn = responce.data.loggedIn;
      const loggedInStatus = this.state.loggedInStatus;

      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === 'NOT_LOGGED_IN'){
        this.setState({
          loggedInStatus: "LOGGED_IN",
          loggedInAs: responce.data
        });
      } else if (!loggedIn && loggedInStatus === 'LOGGED_IN'){
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        });
      }
    })
    .catch(error => {
      console.log("Error occured", error);
    })
  }

  componentDidMount(){
    this.checkLoginStatus();
  }

  // login code ^^^^^

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
            <div>
            {this.state.loggedInStatus}
            {this.state.loggedInAs.username}
            </div>
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
              <Route path = "/login" render = {props => (
                <Login
                  {...props}
                  loggedInStatus = {this.state.loggedInStatus}
                  handleSuccsessfulLogin = {this.handleSuccsessfulLogin}
                  handleUnsuccsessfulLogin = {this.handleUnsuccsessfulLogin}
                />  
              )} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
