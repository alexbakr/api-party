import React, { Component } from 'react';
<<<<<<< HEAD
import { NavLink, Switch, Route } from 'react-router-dom';
=======
import { Switch, Route, NavLink } from 'react-router-dom'
import Github from './Github'
import Nasa from './Nasa'
import Homework from './Homework'
>>>>>>> 09fb4270aac75af196a47d9a695df4d921085a09
import './App.css';
import Github from './Github.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
<<<<<<< HEAD
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
=======
          <div className="App-headings">
            <h3>Ain't no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to={'/github'}>Github API</NavLink>
            </li>
            <li>
              <NavLink to={'/nasa'}>NASA API</NavLink>
            </li>
            <li>
              <NavLink to={'/homework'}>Homework</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/github' component={Github} />
          <Route path='/nasa' component={Nasa} />
          <Route path='/homework' component={Homework} />
          <Route render={() => <p>To get started, click one of the links above</p>} />
        </Switch>
>>>>>>> 09fb4270aac75af196a47d9a695df4d921085a09
      </div>
    );
  }
}

export default App;