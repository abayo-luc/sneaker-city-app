import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
export default () => (
  <nav class="navbar navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Sneaker City
    </Link>
    <form class="form-inline form-container">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </nav>
);
