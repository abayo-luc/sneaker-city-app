import React from 'react';
import { Link } from 'react-router-dom';
import { getReadableData } from '../../helper';
import './style.scss';
export default ({ data }) => {
  return (
    <Link
      to={`/products/${data.id}`}
      className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4 react-link"
    >
      <div className="card shadow">
        <div className="shape">
          <div className="shape-text">{data.brand_name}</div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10"></div>
          <div className="col-md-1"></div>
        </div>
        <div className="card-body ">
          <img className="card-img-top" src={data.grid_picture_url} alt="" />
          <div className="text-reset">
            <h3 className="card-title display-4 name text-color-dark">
              {data.nickname}
            </h3>
          </div>
          <h6 className="text-color-dark">
            Price:{' '}
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(data.retail_price_cents * 0.01 || 500)}
          </h6>
          <div>
            {[
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
        </div>
      </div>
    </Link>
  );
};
