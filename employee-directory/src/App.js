// React and Component Imports
import React, { Component } from 'react';
import SearchBox from './components/Search';
import Table from './components/Table';


// Parent Component
class App extends Component {
  // Initial State
    // Employee Data
    state = {
      employees: [
        {
           name: 'Eric',
           position: 'Manager of Software Engineering',
           department: 'Development',
           salary: '$160,000',
         },
        {
           name: 'Crosby',
           position: 'Senior Full Stack Engineer',
           department: 'Development',
           salary: '$120,000',
         },
        {
           name: 'Bailey',
           position: 'Senior Database Engineer',
           department: 'Development',
           salary: '$115,000',
         },
        {
           name: 'Kay',
           position: 'Junior Software Engineer',
           department: 'Development',
           salary: '$90,000',
         },
        {
           name: 'Dillon',
           position: 'Junior Front-End Engineer',
           department: 'Development',
           salary: '$80,000',
         },
        {
           name: 'Dixit',
           position: 'Financial Reporting Manager',
           department: 'Accounting',
           salary: '$102,000',
         },
        {
           name: 'Craig',
           position: 'Senior Accountant',
           department: 'Accounting',
           salary: '$85,000',
         },
        {
           name: 'Christine',
           position: 'Staff Accountant',
           department: 'Accounting',
           salary: '$70,000',
         },
        {
           name: 'Andrew',
           position: 'Accounts Payable Specialist/Financial Analyst',
           department: 'Accounting',
           salary: '$75,000',
         },
        {
           name: 'Amy',
           position: 'Financial Analyst',
           department: 'Accounting',
           salary: '$75,000',
         },
        {
           name: 'Sarah',
           position: 'Marketing Manager',
           department: 'Marketing',
           salary: '$110,000',
         },
        {
           name: 'Ben',
           position: 'Senior Sales Associate',
           department: 'Marketing',
           salary: '$45,000',
         },
        {
           name: 'Rob',
           position: 'Marketing Analyst',
           department: 'Marketing',
           salary: '$55,000',
         },
        {
           name: 'Dean',
           position: 'Sales Associate',
           department: 'Marketing',
           salary: '$40,000',
         },
        {
           name: 'Zara',
           position: 'Sales Associate',
           department: 'Marketing',
           salary: '$40,000',
         },
        {
           name: 'Fay',
           position: 'Quality Assurance Associate',
           department: 'Operations',
           salary: '$45,000',
         },
        {
           name: 'Ian',
           position: 'Customer Service Representative',
           department: 'Operations',
           salary: '$40,000',
         },
        {
           name: 'Carlos',
           position: 'Data Analyst',
           department: 'Operations',
           salary: '$70,000',
         },
        {
           name: 'Tucker',
           position: 'Customer Service Representative',
           department: 'Operations',
           salary: '$40,000',
         },
      ],
      // Empty String that will update when the user types into the search bar
      searchEmployee: ''
     };

    // Function to Remove an employee from the table
    removeEmployee = (index) => {
      // Current State
      const { employees } = this.state;
      
      // Change the Current State
      this.setState({
        // Filter the array based on the index passed through, and return a new array
        employees: employees.filter((employee, i) => {
          return i !== index;
        }),
      });
    }

    // Function to track the user's keystrokes and update the empty string in the Initial State Object
    handleInput = (e) => {
      // console.log(e.target.value);
      this.setState({ searchEmployee: e.target.value })
    }
    

    render() {
      // Current State 
      const { employees } = this.state;
      
      // contains all employees to filter for based off what the user types into search
      const filteredEmployees = this.state.employees.filter((employee) => {
        return employee.name.toLowerCase().includes(this.state.searchEmployee.toLowerCase())
      })

      return (
        <div className="container">
          <h1>Employee Directory</h1>
          <SearchBox handleInput={this.handleInput}/>
          <Table employeeData={employees} removeEmployee={this.removeEmployee} filteredEmployees={filteredEmployees} />
        </div>
      );
    }
  }

// Export Parent Component (App) and load it in index.js
  export default App;