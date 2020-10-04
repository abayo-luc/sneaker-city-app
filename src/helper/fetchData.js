import { useState, useEffect } from 'react';
import Axios from 'axios';
const { REACT_APP_API_BASE_URL } = process.env;

export default ({ search, page = 1 }) => {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const fetchData = ({ search, page = 1 } = {}) => {
    setIsLoading(true);
    let urlQuery = `?page=${page}`;
    if (search) urlQuery += `&search=${search}`;
    return Axios.get(`${REACT_APP_API_BASE_URL}/sneakers${urlQuery}`)
      .then((res) => {
        const {
          data: { sneakers: response, count },
        } = res.data;
        setCount(count);
        setSneakers(response);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { sneakers, count, isLoading };
};
