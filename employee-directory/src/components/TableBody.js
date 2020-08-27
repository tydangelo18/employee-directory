// React import
import React from "react";

const TableBody = (props) => {
    // Map through the filtered employees function and assign a key for React to identify 
    const rows = props.filteredEmployees.map((row, index) => {
        
        return (
            <tr key={index}>
                <td>{row.name}</td>
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