import React, { useState } from 'react';




const HeadingAndState = ({ buyProduct, setTabState }) => {
  return (
    <div>
      <div className=" container mx-auto flex flex-col justify-center items-center pt-30 space-y-5 pb-1">
        <h3 className="text-5xl font-bold text-gray-800">
          Premium Digital Tools
        </h3>
        <p className="text-center text-gray-600">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="">
          <div className="tabs tabs-box rounded-full font-semibold">
            <input
              onClick={() => setTabState('Product')}
              type="radio"
              name="my_tabs_1"
              className="tab checked:bg-linear-to-r checked:from-[#3d2bca] checked:to-violet-600 checked:text-white px-10 h-12 rounded-full"
              aria-label="Product"
              defaultChecked
            />

            <input
              onClick={() => setTabState('cart')}
              type="radio"
              name="my_tabs_1"
              className="tab checked:bg-linear-to-r checked:from-[#3c29c5] checked:to-violet-600 checked:text-white px-10 h-12 rounded-full"
              aria-label={`Cart (${buyProduct.length})`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingAndState;
