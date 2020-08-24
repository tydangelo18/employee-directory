// Loading the {Component} as a property of React, so no longer need to extend React.Component
import React, {Component} from 'react'
// Load in the Child Component (Table) into Parent (App)
import Table from './Table'

// Parent Component
  // Everything will load in this component
// Must include render() and can only return one Parent Element
  // Wrap Child Components in a <Div> if you have more than 1
  class App extends Component {
      // Load the Child Component (Table) inside render() of the Parent Component (App)
      // Be sure it is inside a container
    render() {
        // Placeholder Table Data to Test Props
            // Will pass the data through to the Child Component (Table) with props
        const employees = [
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
        ]

      return (
          // Prop named employeeData is the above employees Array that will be passed through to the Child Component (Table)
        <div className="container">
            <Table employeeData={employees} />
        </div>
      )
    }
  }


  // Export Parent Component (App) and load it in index.js
  export default App