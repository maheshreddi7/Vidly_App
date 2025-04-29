import React from "react";
import _ from "lodash";

const Pajonation = (props) => {
  const { itemCount, currentPage, pageSize } = props;
  console.log(currentPage);

  const pageCount = itemCount / pageSize;
  const pages = _.range(1, pageCount + 1);
  return (
    <React.Fragment>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={currentPage ? "page-item active" : "page-item"}
            >
              <a className="page-link" onClick={() => props.onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pajonation;
