// Loading the {Component} as a property of React, so no longer need to extend React.Component
import React from 'react';

// Child Component (Table)
const Table = (props) => {
    // can declare a variable equal to props and have the Child receive the prop as the variable rather than as props.x
    const { employeeData, removeEmployee } = props;
    
    // Load the Child Components (TableHeader & TableBody) inside render() of the Table Component (Parent of the Two)
    return (
        // Two Child Components Nested inside of Table
        // Both Must be wrapped inside of a Parent Element (<table>) because Class Components can only return ONE Element
            // Pass in the above data variable into the Child Component that it best belongs to (TableBody) as props (State and Custom Method)
        <table>
            <TableHeader />
            <TableBody employeeData={employeeData} removeEmployee={removeEmployee} />
        </table>
    );
}


// Child Component (TableHeader) of Table Component written as a Simple Component
    // This will be the Header of the Employee Table
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Employee</th>
                <th>Position</th>
            </tr>
        </thead>
    );
}

// Child Component (TableBody) of the Table Component written as a Simple Component
    // This will be the Body of the Employee Table
    // Pass the props (employee data) through the Component as a parameter
const TableBody = (props) => {
    // Map through the employee data array from Parent (App) to return a table row for each object in the array
    const rows = props.employeeData.map((row, index) => {
        // Each table row needs a key for React to Identify them
        // Identifies each object in the employees data array from Parent (App) to map
        // Identifies each object in the employee data array from Parent (App) to filter and remove
        // Add a button to fire the custom method
        // Receiving the custom method as a prop
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.position}</td>
                <td>
                    <button onClick={() => props.removeEmployee(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    // Maps, changes, and displays each object in the employee data array from Parent (App)
    return <tbody>{rows}</tbody>
}

// Export Child Component (Table) and load it in Parent Component (App)
export default Table;