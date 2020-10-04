import React, { useState, useEffect } from 'react';
import Product from '../../componets/Product';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Loader from '../../componets/Loader';
const { REACT_APP_API_BASE_URL } = process.env;
export default () => {
  const [loading, setLoading] = useState(false);
  const [sneaker, setSnkear] = useState({});
  const { id } = useParams();

  const fetchData = (id) => {
    setLoading(true);
    return Axios.get(`${REACT_APP_API_BASE_URL}/sneakers/${id}`)
      .then((res) => {
        const { sneaker } = res.data;
        setSnkear(sneaker);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);
  if (loading) {
    return <Loader />;
  }
  return <Product data={sneaker} />;
};
