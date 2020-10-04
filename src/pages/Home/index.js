import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductPreview from '../../componets/ProductPreview';
import Loading from '../../componets/Loader';
import Pagination from '../../componets/Pagination';
const { REACT_APP_API_BASE_URL } = process.env;

export default () => {
  const [loading, setLoading] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const fetchData = ({ search, page = 1 } = {}) => {
    setLoading(true);
    return Axios.get(`${REACT_APP_API_BASE_URL}/sneakers`)
      .then((res) => {
        const {
          data: { sneakers: response },
        } = res.data;
        setSneakers(response);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="row product-page">
        {sneakers.map((sneaker) => (
          <ProductPreview key={sneaker.id} data={sneaker} />
        ))}
      </div>
      <Pagination />
    </>
  );
};
