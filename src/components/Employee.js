import React, { Component } from 'react'

export default class employee extends Component {
    constructor(props){
        super(props);

        this.state ={
            isLoading: true,
            employees: []
        };
    }

        async componentDidMount(){
            //grab url use for Request Mapping in Eclipse
            const response = await fetch('/tomio_api/v1/employees');
            const body = await response.json();
            this.setState({employees:body, isLoading: false});
        }
    
    render() {
        const {employees,isLoading} =this.state;

        if(isLoading){
            return<p>Loading...</p>
        }
        return (
            <div className ="employeeContainer">
                <h2>Employee List</h2>
                {employees.map(employee =>
                  <div key={employee.id} className="employeeParent">
                      <table className="employeeTable">
                        <tr>
                          <th>Employee Id</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                        </tr>
                        <tr>
                          <td>{employee.id}</td>
                          <td>{employee.firstName}</td>
                          <td>{employee.lastName}</td>
                          <td>{employee.email}</td>
                        </tr>
                      </table>
                  </div>
                )}
                <button>Edit</button>
                <button>Update</button>

          </div>
        )
    }
}
