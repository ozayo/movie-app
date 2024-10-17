// src/components/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5; // Aynı anda gösterilecek maksimum sayfa sayısı
  const startPage = Math.floor((currentPage - 1) / maxPagesToShow) * maxPagesToShow + 1;
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  const handleNextGroup = () => {
    if (endPage < totalPages) {
      onPageChange(endPage + 1);
    }
  };

  const handlePreviousGroup = () => {
    if (startPage > 1) {
      onPageChange(startPage - maxPagesToShow);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <div className="flex justify-center mt-10 space-x-2">
      {/* Önceki 5 sayfa << */}
      <button
        className="px-2 py-1 bg-gray-200 hover:bg-gray-400 rounded-md"
        onClick={handlePreviousGroup}
        disabled={startPage === 1}
      >
        &laquo;
      </button>

      {/* Önceki sayfa < */}
      <button
        className="px-2 py-1 bg-gray-200 hover:bg-gray-400 rounded-md"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* Sayfa numaraları */}
      {pages.map((page) => (
        <button
          key={page}
          className={`px-2 py-1 rounded-md ${
            page === currentPage
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 hover:bg-gray-800 hover:text-white'
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Sonraki sayfa > */}
      <button
        className="px-2 py-1 bg-gray-200 hover:bg-gray-400 rounded-md"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>

      {/* Sonraki 5 sayfa >> */}
      <button
        className="px-2 py-1 bg-gray-200 hover:bg-gray-400 rounded-md"
        onClick={handleNextGroup}
        disabled={endPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
