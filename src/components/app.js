import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Auth from './pages/auth';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <Router>
          <div>
            <Switch>
              <Route exact path = "/" Component = {Home} />
              <Route path = "/about-me" Component = {About} />
              <Route path = "/contact" Component = {Contact} />
              <Route path = "/blog" Component = {Blog}/>
              <Route path = "/auth" Component = {Auth}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
