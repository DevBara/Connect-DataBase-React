import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Employee from './components/Employee'
import Home from './components/Home'


function App (){
  return(
 
  <div className='siteContainer'>
  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link className="nav" to ="/home"> Home</Link>
            </li>
            <li>
              <Link className="nav" to ="/employee">Employee List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/employee" component={Employee} />
        </Switch>
      </div>   
   </Router>
</div>
  )
}

export default App;