// Importing React, ReactDOM, and CSS for the page
import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';

// Rendering the App component to the root so that the root <div> element in Index.html will be updated when a React Element Changes
ReactDOM.render(<App />, document.getElementById('root'))

