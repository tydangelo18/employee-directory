// React Import
import React from "react";
import "../styles/TableHeader.css"

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Employee</th>
                <th>Position</th>
                <th>Department</th>
                <th>Salary</th>
            </tr>
        </thead>
    );
}

// Export Component as TableHeader
export default TableHeader;