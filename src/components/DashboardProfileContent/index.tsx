import React from 'react'

const DashboardProfileContent = () => {
  return (
    <div className="">
      <div className="mb-8 rounded-xl bg-background_gray p-8">
        <div className="flex items-center ">
          <div className="h-24 w-24 rounded-full bg-sky"></div>{' '}
          {/* Rounded Picture */}
          <div className="ml-4">
            <h1 className="text-xl font-bold">John Doe</h1> {/* Name */}
            <p className="text-gray-600">john.doe@example.com</p> {/* Email */}
          </div>
        </div>
        <hr className="my-8" /> {/* Horizontal line */}
        <div className="flex">
          <input
            type="text"
            className="border-gray-300 mr-2 w-1/2 rounded border px-4 py-2"
            placeholder="Name"
          />
          <input
            type="text"
            className="border-gray-300 ml-2 w-1/2 rounded border px-4 py-2"
            placeholder="Surname"
          />
        </div>
        <div className="mt-4 flex">
          <select className="border-gray-300 mr-2 w-1/2 rounded border px-4 py-2">
            <option value="">Category</option>
            {/* Add category options here */}
          </select>
          <select className="border-gray-300 ml-2 w-1/2 rounded border px-4 py-2">
            <option value="">Subcategory</option>
            {/* Add subcategory options here */}
          </select>
        </div>
        <input
          type="text"
          className="border-gray-300 mt-4 w-full rounded border px-4 py-2"
          placeholder="Phone Number"
        />
      </div>
      <div className="mb-8 rounded-xl bg-background_gray p-8">
        <div className="flex items-center ">
          <div className="h-24 w-24 rounded-full bg-sky"></div>{' '}
          {/* Rounded Picture */}
          <div className="ml-4">
            <h1 className="text-xl font-bold">John Doe</h1> {/* Name */}
            <p className="text-gray-600">john.doe@example.com</p> {/* Email */}
          </div>
        </div>
        <hr className="my-8" /> {/* Horizontal line */}
        <div className="flex">
          <input
            type="text"
            className="border-gray-300 mr-2 w-1/2 rounded border px-4 py-2"
            placeholder="Name"
          />
          <input
            type="text"
            className="border-gray-300 ml-2 w-1/2 rounded border px-4 py-2"
            placeholder="Surname"
          />
        </div>
        <div className="mt-4 flex">
          <select className="border-gray-300 mr-2 w-1/2 rounded border px-4 py-2">
            <option value="">Category</option>
            {/* Add category options here */}
          </select>
          <select className="border-gray-300 ml-2 w-1/2 rounded border px-4 py-2">
            <option value="">Subcategory</option>
            {/* Add subcategory options here */}
          </select>
        </div>
        <input
          type="text"
          className="border-gray-300 mt-4 w-full rounded border px-4 py-2"
          placeholder="Phone Number"
        />
      </div>
    </div>
  )
}

export default DashboardProfileContent
