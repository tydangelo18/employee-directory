// Loading the {Component} as a property of React, so no longer need to extend React.Component
import React, {Component} from 'react'
// Load in the Child Component (Table) into Parent (App)
import Table from './Table'

// Parent Component
  // Everything will load in this component
// Must include render() and can only return one Parent Element
  // Wrap Child Components in a <Div> if you have more than 1
  class App extends Component {
    // set the initial state with a state object
      // the object will contain propeties for everything we want to store in state (employees)
    state ={
      employees: [
        {
          name: 'Jack',
          title: 'Manager',
        },
        {
            name: 'DJ',
            title: 'Full Stack Engineer'
        },
        {
            name: 'Crosby',
            title: 'Systems Admin',
        },
        {
            name: 'Mina',
            title: 'Accountant',
        },
      ],
    }

    // To change the state (remove an employee): must first create a custom method that will change the state
    removeEmployee = (index) => {
      // Current State
      const {employees} = this.state
      // use this.setState() to actually change the state
      this.setState({
        // Filter the array based on the index passed through, and return a new array
          // Filter is preferred method for modifying arrays in JS
        employees: employees.filter((employee, i) => {
          return i !==index
        }),
      })
    }
    
    // Load the Child Component (Table) inside render() of the Parent Component (App)
      // Be sure it is inside a container
    render() {
      // Current State 
      const { employees } = this.state

      return (
          // Prop named employeeData is the above employees Array that will be passed through to the Child Component (Table)
          // Must pass the custom method to the Child Component as a prop using this.x
        <div className="container">
            <Table employeeData={employees} removeEmployee={this.removeEmployee} />
        </div>
      )
    }
  }


  // Export Parent Component (App) and load it in index.js
  export default App