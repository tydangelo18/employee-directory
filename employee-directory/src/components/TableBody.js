// React import
import React from "react";
import '../styles/TableBody.css'

const TableBody = (props) => {
    // Map through the filtered employees function and assign a key for React to identify 
    const rows = props.filteredEmployees.map((row, index) => {
        
        return (
            <tr className="table-body" key={index}>
                <td className="active-row">{row.name}</td>
                <td>{row.position}</td>
                <td>{row.department}</td>
                <td>{row.salary}</td>
                <td>
                    <button onClick={() => props.removeEmployee(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    // Returns each employee and corresponding data
    return <tbody>{rows}</tbody>
}

// Export Component as TableBody
export default TableBody;