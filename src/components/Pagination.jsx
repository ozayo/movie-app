// src/components/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 10; // Aynı anda gösterilecek maksimum sayfa sayısı
  const startPage = Math.floor((currentPage - 1) / maxPagesToShow) * maxPagesToShow + 1;
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  const handleNextGroup = () => {
    if (endPage < totalPages) {
      onPageChange(endPage + 1);
    }
  };

  const handlePreviousGroup = () => {
    if (startPage > 1) {
      onPageChange(startPage - 1);
    }
  };

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <div className="flex justify-center mt-4">
      <button
        className="px-4 py-2 mx-1 bg-gray-200"
        onClick={handlePreviousGroup}
        disabled={startPage === 1}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 mx-1 ${page === currentPage ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-800 hover:text-white'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="px-4 py-2 mx-1 bg-gray-200"
        onClick={handleNextGroup}
        disabled={endPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
