// React and Component Imports
import React from 'react';

function Search(props) {
    return (
        <div>
    <input onChange={props.handleInput} type="text"/>
        </div>
    )
}

// Export Component as Search
export default Search;