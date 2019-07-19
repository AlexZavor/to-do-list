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
              <Route exact path = "/" component = {Home} />
              <Route path = "/about-me" component = {About} />
              <Route path = "/contact" component = {Contact} />
              <Route path = "/auth" component = {Auth} />
              <Route path = "/blog" component = {Blog}/>

              <Route component = {NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
