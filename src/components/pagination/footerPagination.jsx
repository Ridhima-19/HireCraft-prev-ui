import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationFooter({
  currentPage,
  totalPages,
  onPageChange,
}) {
  // Helper to generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-6 gap-2 flex-wrap">
      {/* Prev button */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg shadow text-sm transition 
          ${currentPage === 1
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"}`}
      >
        <ChevronLeft size={16} /> Prev
      </button>

      {/* Page numbers */}
      {getPageNumbers().map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition shadow 
            ${currentPage === num
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
        >
          {num}
        </button>
      ))}

      {/* Next button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg shadow text-sm transition 
          ${currentPage === totalPages
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"}`}
      >
        Next <ChevronRight size={16} />
      </button>
    </div>
  );
}
