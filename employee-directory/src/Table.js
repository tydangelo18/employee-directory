// Loading the {Component} as a property of React, so no longer need to extend React.Component
import React, {Component} from 'react'

// Child Component (Table)
class Table extends Component {
    // Load the Child Component (Table) inside render() of the Pare
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
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
    )
}

// Child Component (TableBody) of the Table Component written as a Simple Component
    // This will be the Body of the Employee Table
const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Fredward</td>
                <td>Manager</td>
            </tr>
            <tr>
                <td>DJ</td>
                <td>Full Stack Engineer</td>
            </tr>
            <tr>
                <td>Crosby</td>
                <td>Systems Admin</td>
            </tr>
            <tr>
                <td>Mina</td>
                <td>Accountant</td>
            </tr>
        </tbody>
    )
}

// Export Child Component (Table) and load it in Parent Component (App)
export default Table