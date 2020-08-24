// Loading the {Component} as a property of React, so no longer need to extend React.Component
import React, {Component} from 'react'

// Child Component (Table)
class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Position</th>
                    </tr>
                </thead>
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
            </table>
        )
    }
}

// Export Child Component (Table) and load it in Parent Component (App)
export default Table