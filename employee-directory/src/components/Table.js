// React and Component Imports
import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

// Child Component (Table)
const Table = (props) => {
    // State and Functions as props
    const { employeeData, removeEmployee, filteredEmployees } = props;
        return (
            <table>
                <TableHeader />
                <TableBody employeeData={employeeData} removeEmployee={removeEmployee} filteredEmployees={filteredEmployees} />
            </table>
        );
    
    
}

// Export Component as Table
export default Table;