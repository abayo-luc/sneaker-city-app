import React, { useState } from 'react';
import Interwave from 'interweave';
import { useHistory } from 'react-router-dom';
import './style.scss';
import { getReadableData } from '../../helper';

const stringfyData = (value) => JSON.stringify(value);
export default ({ data }) => {
  const history = useHistory();
  const [selectedSize, setSlectedSize] = useState(null);
  const handleAddToCart = () => {
    try {
      const cartItems = JSON.parse(localStorage.getItem('cart'));
      localStorage.setItem(
        'cart',
        stringfyData({
          ...cartItems,
          [data.id]: { ...data, ordered_size: selectedSize },
        })
      );
    } catch (error) {
      localStorage.setItem(
        'cart',
        stringfyData({ [data.id]: { ...data, ordered_size: selectedSize } })
      );
    }

    history.push('/carts');
  };
  return (
    <div className="container mb-5">
      <div className="card shadow">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="image col-md-6">
              <div className="pic-container">
                <img
                  src={data.main_picture_url}
                  alt="img"
                  className="product-image"
                />
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title text-color-dark">
                {data.nickname || data.name}
              </h3>
              <div className="rating">
                <span className="font-weight-lighter">{data.name}</span>
              </div>
              <Interwave
                className="product-description"
                content={data.story_html}
              />
              <h4 className="price text-color-dark">
                current price:{' '}
                <span>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(data.retail_price_cents * 0.01 || 500)}
                </span>
              </h4>
              <p className="vote">
                <strong>91%</strong> of buyers enjoyed this product!
              </p>
              <div>
                {[
                  { name: 'color', key: 'color' },
                  { name: 'Release Date', key: 'release_date', isData: true },
                  { name: 'designer', key: 'designer', default: 'Unknown' },
                  { name: 'gender', key: 'gender', default: 'Unisex' },
                ].map((item) => (
                  <p key={item.key} className="font-weight-lighter extra-info">
                    <span>{item.name}</span>:
                    <span className="mx-2">
                      {item.isData
                        ? getReadableData(data[item.key])
                        : data[item.key] || item.default}
                    </span>
                  </p>
                ))}
              </div>
              <h5 className="sizes text-color-dark">
                sizes:
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  onChange={(e) => setSlectedSize(e.target.value)}
                  defaultValue="0"
                >
                  <option value="0">Choose..</option>
                  {data.size_range?.map((item) => (
                    <option value={item.size} key={item.size}>
                      {item.size}
                    </option>
                  ))}
                </select>
              </h5>
              {selectedSize && (
                <h5 className="colors small">
                  <span>
                    {
                      data.size_range?.find(
                        (item) => item.size === parseInt(selectedSize)
                      )?.size
                    }
                    <span className="mx-1"> available pairs</span>
                  </span>
                </h5>
              )}
              <div className="action row">
                <div className="col-md-6 col-12 my-2">
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-block"
                    onClick={handleAddToCart}
                    disabled={!selectedSize}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="brand">
              <span className="badge badge-primary">{data.brand_name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
