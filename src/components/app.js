import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavigationContainer from './navigation/navigation-container';

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
        <h1>Website startup</h1>
        <h2>The very beggining of something new.</h2>
        <p>Ill come back to this as soon as I can, weeeeeeee</p>
      </div>
    );
  }
}
