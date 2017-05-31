import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import Github from './Github.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-heading">
            <h3>Party</h3>
            <h1>API Party</h1>
            </div>
            <ul className ="nav-links">
              <li>
                <NavLink to='/github'>Github API</NavLink>
              </li>
              <li>
                <NavLink to='/nasa'>NASA API</NavLink>
              </li>
              <li>
                <NavLink to='/homework'>Homework</NavLink>
              </li>
            </ul>
            <Switch>
            <Route path='/github' component={Github} />
            <Route render={()=> <p> To get started clink on the lik abouve </p>} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
