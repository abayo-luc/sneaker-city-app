import React from 'react';
import './style.scss';

export default () => (
  <div className="container">
    <div className="card">
      <div class="container-fliud">
        <div class="wrapper row">
          <div className="image col-md-6">
            <div class="pic-container">
              <img
                src="http://placekitten.com/400/252"
                alt="img"
                className="product-image"
              />
            </div>
          </div>
          <div class="details col-md-6">
            <h3 class="product-title">men's shoes fashion</h3>
            <div class="rating">
              <div class="stars">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
              <span class="review-no">41 reviews</span>
            </div>
            <p class="product-description">
              Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
              cubilia sem sem! Repudiandae et! Massa senectus enim minim
              sociosqu delectus posuere.
            </p>
            <h4 class="price">
              current price: <span>$180</span>
            </h4>
            <p class="vote">
              <strong>91%</strong> of buyers enjoyed this product!{' '}
            </p>
            <h5 class="sizes">
              sizes:
              <span class="size" data-toggle="tooltip" title="small">
                s
              </span>
              <span class="size" data-toggle="tooltip" title="medium">
                m
              </span>
              <span class="size" data-toggle="tooltip" title="large">
                l
              </span>
              <span class="size" data-toggle="tooltip" title="xtra large">
                xl
              </span>
            </h5>
            <h5 class="colors">
              colors: <span>green</span>
            </h5>
            <div class="action row">
              <div className="col-md-6 col-12 my-2">
                <button type="button" class="btn btn-outline-dark btn-block">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
