import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
export default () => (
  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4">
    <div class="card shadow">
      <div class="card-body text-center">
        <h3 class="text-warning">SALE 50% OFF</h3>
        <Link to="/products/kjkjd" href="#">
          <img
            class="card-img-top"
            src="https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </Link>
        <Link to="/products/hjkjd" class="text-reset" href="#">
          <h3 class="card-title display-4">viverra</h3>
        </Link>
        <h6>
          $199.99 <del class="text-muted ml-2">$399.99</del>
        </h6>
        <Link
          to="/products/idlkjad"
          class="btn btn-dark my-2"
          href="#"
          role="button"
        >
          Add to Cart
        </Link>
      </div>
    </div>
  </div>
);
