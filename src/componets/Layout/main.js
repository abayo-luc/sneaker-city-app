import React from 'react';
import NavBar from '../NavBar';

export default ({ children }) => (
  <div className="App">
    <NavBar />
    <div className="container my-2">{children}</div>
  </div>
);
