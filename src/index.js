/* file is entry  point to react */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/* 
root is the id name of the div from index.html
.createRoot() takes in a container & returns the root
.createRoot() controls contents of the container node passed in
root div wraps around the entire UI
*/

const root = ReactDOM.createRoot(document.getElementById('root')); 
// we're grabbing div from index.html & inserting app into that div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/// app is root component

reportWebVitals();
