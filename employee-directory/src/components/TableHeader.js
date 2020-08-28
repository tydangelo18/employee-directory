// React Import
import React from "react";
import "../styles/TableHeader.css"

const TableHeader = () => {
    return (
        <thead className="header">
            <tr>
                <th>Employee</th>
                <th>Position</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Delete</th>
            </tr>
        </thead>
    );
}

// Export Component as TableHeader
export default TableHeader;