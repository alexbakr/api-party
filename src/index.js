import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
<<<<<<< HEAD
    <Router>
        <App />
    </Router>, 
document.getElementById('root'));
=======
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));
>>>>>>> 09fb4270aac75af196a47d9a695df4d921085a09
registerServiceWorker();
