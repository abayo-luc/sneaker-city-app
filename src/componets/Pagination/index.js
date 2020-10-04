import React from 'react';

export default ({ pagesNumber, currentPage, onPaginate }) => {
  const pages = [...Array(pagesNumber).keys()];
  const isCurrent = (value) => value + 1 === currentPage;
  return (
    <div className="container pagination-container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="btn btn-light page-link"
              aria-label="Previous"
              disabled={currentPage === 1}
              onClick={() => onPaginate(currentPage - 1)}
            >
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </button>
          </li>

          {pages.map((page) => (
            <li
              className={`page-item ${isCurrent(page) ? 'active' : null}`}
              key={page}
              onClick={() => onPaginate(page + 1)}
            >
              <button
                className="btn btn-light page-link"
                disabled={isCurrent(page)}
              >
                {page + 1}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="btn btn-light page-link"
              aria-label="Next"
              disabled={pages.length === currentPage}
              onClick={() => onPaginate(currentPage + 1)}
            >
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
