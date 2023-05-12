import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import React, { FC } from 'react'
import detectMob from '@/utils/services/detectMobile'

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
  const maxDisplayedPages = detectMob() ? 1 : 5
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
    <div className="mt-8 mb-12 flex items-center justify-center ">
      <button
        className="h-10 rounded-l-full border border-r-[0px] border-border_gray px-4 py-2  text-text_gray hover:text-disable_gray"
        disabled={currentPage === 1}
        onClick={() => onChangePage(currentPage - 1)}
      >
        <HiChevronLeft className="h-5 w-5" />
      </button>

      <div className="flex">
        {startPage > 1 && (
          <>
            <button
              className={`h-10 border border-r-[0px] border-border_gray px-4 py-2 text-text_gray hover:text-disable_gray`}
              onClick={() => onChangePage(1)}
            >
              1
            </button>
            {startPage > 2 && (
              <span className="h-10 border border-r-[0px] border-border_gray px-4 py-2  text-text_gray">
                ...
              </span>
            )}
          </>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`h-10 border border-r-[0px] border-border_gray px-4 py-2 hover:text-disable_gray  ${
              currentPage === page ? ' text-sky' : 'text-text_gray'
            } `}
            onClick={() => onChangePage(page)}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="h-10 border border-r-[0px] border-border_gray  px-4 py-2">
                ...
              </span>
            )}
            <button
              className={` h-10 border border-r-[0px] border-border_gray px-4 py-2 text-text_gray hover:text-disable_gray`}
              onClick={() => onChangePage(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button
        className=" h-10 rounded-r-full border border-border_gray px-4 py-2 text-text_gray hover:text-disable_gray"
        disabled={currentPage === totalPages}
        onClick={() => onChangePage(currentPage + 1)}
      >
        <HiChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}

export default Pagination
