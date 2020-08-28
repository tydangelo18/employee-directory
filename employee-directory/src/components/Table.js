// React and Component Imports
import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import '../styles/Table.css'

// Child Component (Table)
const Table = (props) => {
    // State and Functions as props
    const { employeeData, removeEmployee, filteredEmployees } = props;
        return (
            <div className="employeeTable">
                <table className="content-table">
                    <TableHeader />
                    <TableBody employeeData={employeeData} removeEmployee={removeEmployee} filteredEmployees={filteredEmployees} />
                </table>
            </div>
        );
    
    
}

// Export Component as Table
export default Table;