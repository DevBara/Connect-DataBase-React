import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    employees: []
  };

  async componentDidMount() {
    const response = await fetch('/tomio_api/v1/employees');
    const body = await response.json();
    this.setState({ employees: body, isLoading: false });
  }

  render() {
    const {employees, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Employee List</h2>
            {employees.map(employee =>
              <div key={employee.id}>
                {employee.firstName}
                <br></br>
                {employee.lastName}
                <br></br>
                {employee.email}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;