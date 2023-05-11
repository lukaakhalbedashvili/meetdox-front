import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import React, { FC } from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onChangePage: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChangePage,
}) => {
  const maxDisplayedPages = 5 // Change this value to adjust the number of displayed pages
  const pageNumbers = []
  let startPage = 1
  let endPage = totalPages

  if (totalPages > maxDisplayedPages) {
    const halfMaxDisplayedPages = Math.floor(maxDisplayedPages / 2)
    if (currentPage > halfMaxDisplayedPages) {
      startPage = currentPage - halfMaxDisplayedPages
      if (totalPages - startPage < maxDisplayedPages) {
        startPage = totalPages - maxDisplayedPages + 1
      }
    }
    endPage = startPage + maxDisplayedPages - 1
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="mt-8 flex items-center justify-center">
      <button
        className="border-gray-300 text-gray-600 hover:bg-gray-200 focus:ring-gray-300 border px-4 py-2 focus:outline-none focus:ring focus:ring-offset-2"
        disabled={currentPage === 1}
        onClick={() => onChangePage(currentPage - 1)}
      >
        <HiChevronLeft className="h-5 w-5" />
      </button>

      <div className="flex">
        {startPage > 1 && (
          <>
            <button
              className={`border-gray-300 text-gray-600 hover:bg-gray-200 focus:ring-gray-300 border px-4 py-2 focus:outline-none focus:ring focus:ring-offset-2`}
              onClick={() => onChangePage(1)}
            >
              1
            </button>
            {startPage > 2 && (
              <span className="text-gray-600 px-4 py-2">...</span>
            )}
          </>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`border-gray-300 border px-4 py-2 ${
              currentPage === page
                ? 'bg-gray-600 text-sky'
                : 'text-gray-600 hover:bg-gray-200'
            } focus:ring-gray-300 focus:outline-none focus:ring focus:ring-offset-2`}
            onClick={() => onChangePage(page)}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="text-gray-600 px-4 py-2">...</span>
            )}
            <button
              className={`border-gray-300 text-gray-600 hover:bg-gray-200 focus:ring-gray-300 border px-4 py-2 focus:outline-none focus:ring focus:ring-offset-2`}
              onClick={() => onChangePage(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button
        className="border-gray-300 text-gray-600 hover:bg-gray-200 focus:ring-gray-300 border px-4 py-2 focus:outline-none focus:ring focus:ring-offset-2"
        disabled={currentPage === totalPages}
        onClick={() => onChangePage(currentPage + 1)}
      >
        <HiChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}

export default Pagination
