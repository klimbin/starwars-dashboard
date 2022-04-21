import React from 'react';
import './Pagination.css';

function Pagination(props) {
  const { pageCount, currentPage, setPage } = props;

  const renderPageButton = (num) => {
    const classNames = num === currentPage ? "PageButton selected" : "PageButton";
    return (
      <button
        key={num}
        className={classNames}
        onClick={() => setPage(num)}
      >
        {num}
      </button>
    );
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(renderPageButton(i));
    }
    return pages;
  };

  const renderBackwardArrow = () => {
    const disabled = currentPage === 1;
    const color = disabled ? "#bfbfbf" : "#141414";
    return (
      <button
        className="BackButton"
        onClick={() => setPage(currentPage-1)}
        disabled={disabled}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill={color}><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
      </button>
    );
  };

  const renderForwardArrow = () => {
    const disabled = currentPage === pageCount;
    const color = disabled ? "#bfbfbf" : "#141414";
    return (
      <button
        className="NextButton"
        onClick={() => setPage(currentPage+1)}
        disabled={disabled}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill={color}><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
      </button>
    );
  };

  return (
    <div className="Pagination">
      {renderBackwardArrow()}
      {renderPages()}
      {renderForwardArrow()}
    </div>
  );
}

export default Pagination;
  