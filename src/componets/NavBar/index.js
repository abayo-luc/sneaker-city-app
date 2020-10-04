import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default ({ onSearchQueryChange }) => {
  return (
    <nav className="navbar navbar-light bg-light shadow">
      <Link className="navbar-brand" to="/">
        Sneaker City
      </Link>
      <form className="form-inline form-container">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => onSearchQueryChange(e.target.value)}
        />
      </form>
      <div className="row">
        <div className="col">
          <Link to="/carts" type="button" class="btn btn-light">
            View Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};
