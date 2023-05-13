'use client'

import React from 'react'

const CatalogSidebar = () => {
  return (
    <div className="bg-sky px-4 md:w-1/5">
      <div className="mb-4 mt-16 ">
        <label
          className="mb-2 block text-sm font-medium"
          htmlFor="categoryFilter"
        >
          Category
        </label>
        <select
          id="categoryFilter"
          className="border-gray-400 w-full rounded-md border p-2"
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
      </div>
      <div></div>
    </div>
  )
}
export default CatalogSidebar
