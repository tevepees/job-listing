import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex flex-wrap justify-center">
      {pageNumbers.map(number => (
        <li key={number} className="mx-1">
          <button
            className={`px-4 py-2 rounded shadow text-blue-500 bg-white`}
            onClick={() => handleClick(number)}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
