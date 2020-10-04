import React from 'react';

export default () => (
  <div className="container pagination-container">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <div class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span class="sr-only">Previous</span>
          </div>
        </li>
        <li class="page-item active">
          <div class="page-link" href="#">
            1
          </div>
        </li>
        <li class="page-item">
          <div class="page-link" href="#">
            2
          </div>
        </li>
        <li class="page-item">
          <div class="page-link" href="#">
            3
          </div>
        </li>
        <li class="page-item">
          <div class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
            <span class="sr-only">Next</span>
          </div>
        </li>
      </ul>
    </nav>
  </div>
);
