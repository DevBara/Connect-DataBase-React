import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Employee from './components/Employee'
import Home from './components/Home'


function App (){

    return (
      <div>
        <Router>
          <div className="App">
            <nav className="navBar">
              <ul>
                <li>
                  <Link className="link" to ="/Home"> Home </Link>
                </li>
                <li>
                  <Link className="link" to ="/employee">Employee List</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/employee" component={Employee} />
            </Switch>
          </div>
      </Router>
     </div>
    )
    
  }


export default App;