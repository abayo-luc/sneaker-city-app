import React from 'react';
import NavBar from '../NavBar';

export default ({ children, onSearchQueryChange }) => (
  <div className="App">
    <NavBar onSearchQueryChange={onSearchQueryChange} />
    <div className="container page-container">{children}</div>
  </div>
);
