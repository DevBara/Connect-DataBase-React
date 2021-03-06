import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class Employee extends Component {

  constructor(props) {
    super(props);
    this.state = {employees: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/tomio_api/v1/employees')
      .then(response => response.json())
      .then(data => this.setState({employees: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/tomio_api/v1/employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedEmployees = [...this.state.employees].filter(i => i.id !== id);
      this.setState({employees: updatedEmployees});
    });
  }

  render() {
    const {employees, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const employeeList = employees.map(employee => {
      return <tr key={employee.id}>
        <td style={{whiteSpace: 'nowrap'}}>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.email}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/employee/" + employee.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(employee.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/employees/new">Add Employee</Button>
          </div>
          <h3>Employees List</h3>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="20%">First Name</th>
              <th width="20%">Last Name</th>
              <th>Email</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {employeeList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Employee;