import React from 'react';
import NavBar from '../NavBar';

export default ({ children }) => (
  <div className="App">
    <NavBar />
    <div className="container page-container">{children}</div>
  </div>
);
