import Axios from 'axios';
import React, { useState, useEffect, useContext, useRef } from 'react';
import ProductPreview from '../../componets/ProductPreview';
import Loading from '../../componets/Loader';
import Pagination from '../../componets/Pagination';
import Empty from '../../componets/Empty';
import { SearchContext } from '../../App';

const { REACT_APP_API_BASE_URL } = process.env;

export default () => {
  const rendered = useRef(false);
  const [loading, setLoading] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [pagesNumber, setPagesNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [timer, setTimer] = useState(null);
  const searchQuery = useContext(SearchContext);

  const onPaginate = (value) => {
    setCurrentPage(value);
    fetchData({ page: value });
  };

  const fetchData = ({ search, page = 1 } = {}) => {
    setCurrentPage(page);
    setLoading(true);
    let urlQuery = `?page=${page}`;
    if (search || searchQuery) urlQuery += `&search=${search || searchQuery}`;
    return Axios.get(`${REACT_APP_API_BASE_URL}/sneakers${urlQuery}`)
      .then((res) => {
        const {
          data: { sneakers: response, count },
        } = res.data;
        setSneakers(response);
        setPagesNumber(Math.ceil(count / 10));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (rendered.current) {
      if (timer) clearTimeout(timer);
      setTimer(
        setTimeout(() => {
          fetchData({ search: searchQuery });
        }, 500)
      );
    } else {
      rendered.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

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
      {pagesNumber > 1 && (
        <Pagination
          pagesNumber={pagesNumber}
          onPaginate={onPaginate}
          currentPage={currentPage}
        />
      )}

      {sneakers.length === 0 && <Empty />}
    </>
  );
};
