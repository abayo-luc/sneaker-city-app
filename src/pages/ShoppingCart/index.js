import React, { useEffect, useState } from 'react';
import Empty from '../../componets/Empty';
import './style.scss';

const getSubTotal = (data) =>
  data.reduce(
    (prev, current) =>
      parseFloat(prev) + parseFloat((current.retail_price_cents || 500) * 0.01),
    0
  );

export default () => {
  const [removedItem, setRemovedItem] = useState(0);
  const [data, setData] = useState([]);
  const [orderedQuantity, setOrderedQuantity] = useState({});
  const getAvailableItem = (item) =>
    item?.size_range?.find((i) => `${i.size}` === `${item.ordered_size}`);

  const removeItem = (id) => {
    try {
      setRemovedItem(removedItem + 1);
      const cartItems = JSON.parse(localStorage.getItem('cart') || {});
      delete cartItems[id];
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {}
  };
  const getCartItems = () => {
    try {
      const cartItems = JSON.parse(localStorage.getItem('cart') || {});
      setData(Object.values(cartItems));
    } catch (error) {}
  };

  useEffect(() => {
    getCartItems();
  }, [removedItem]);

  if (data.length === 0) {
    return <Empty />;
  }
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"> </th>
                  <th scope="col">Product</th>
                  <th scope="col">Size</th>
                  <th scope="col">Available</th>
                  <th scope="col" className="text-center">
                    Quantity
                  </th>
                  <th scope="col" className="text-right">
                    Price
                  </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.main_picture_url}
                        alt="img"
                        className="small-image"
                      />
                    </td>
                    <td>{item.nickname}</td>
                    <td>{item.ordered_size}</td>
                    <td className="text-center">
                      {getAvailableItem(item)?.quantity || 0}
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        value={orderedQuantity[item.id] || 1}
                        onChange={(e) => {
                          const { value } = e.target;
                          console.log(value);
                          if (
                            parseInt(value) > 0 &&
                            parseInt(value) <= getAvailableItem(item)?.quantity
                          ) {
                            setOrderedQuantity((state) => ({
                              ...state,
                              [item.id]: value,
                            }));
                          }
                        }}
                      />
                    </td>
                    <td className="text-right">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format((item.retail_price_cents || 500) * 0.01)}
                    </td>
                    <td className="text-right">
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Sub Total</td>
                  <td className="text-right">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(getSubTotal(data))}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Shipping Fee</td>
                  <td className="text-right">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(10)}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td className="text-right">
                    <strong>
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(getSubTotal(data) + 10)}
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col mb-2">
          <div className="row justify-content-end">
            <div className="col-sm-12 col-md-6 text-right">
              <button
                className="btn btn-outline-dark btn-block text-uppercase"
                onClick={() => alert('Comming soon')}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
