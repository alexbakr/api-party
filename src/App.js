import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

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
            </ul>
            <ul className ="nav-links">
              <li>
                <NavLink to='/nasa'>NASA API</NavLink>
              </li>
            </ul>
            <ul className ="nav-links">
              <li>
                <NavLink to='/homework'>Homework</NavLink>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
