import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom'
import './App.css';
import routes from './routes'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'

class App extends Component {
  render() {
    return (
       <Router>
        <div>
          <Header />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
