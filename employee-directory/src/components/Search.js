// React and Component Imports
import React from 'react';
import "../styles/Search.css";

function Search(props) {
    return (
        <div className="searchBar">
            <input onChange={props.handleInput} type="text"/>
        </div>
    )
}

// Export Component as Search
export default Search;