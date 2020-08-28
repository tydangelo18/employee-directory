// React and Component Imports
import React from 'react';
import '../styles/Header.css'

const Header = () => {
    return (
        <div className="headerDiv">
            <h1 className="headerTitle">Employee Directory</h1>
            <h3 className="headerSub">Filter by Department</h3>
        </div>
    )
}

// Export Component as Header
export default Header;

