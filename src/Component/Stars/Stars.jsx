import React from 'react'

const Stars = () => {
  return (
    <div className="bg-linear-to-r from-[#3e29d8] to-violet-600 mt-20 ">
      <div className=" container mx-auto flex justify-between px-3 md:px-40 py-8">
        {' '}
        <div className="">
          <p className="text-3xl md:text-5xl font-bold text-white pb-3">50K+</p>
          <p className=" font-normal md:font-semibold text-gray-200">
            Active Users
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-bold text-white pb-3">200+</p>
          <p className=" font-normal md:font-semibold text-gray-100">
            Premium Tools
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-bold text-white pb-3">4.9</p>
          <p className=" font-normal md:font-semibold text-gray-200">Rating</p>
        </div>
      </div>
    </div>
  );
}

export default Stars