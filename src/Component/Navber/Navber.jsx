import React from 'react';

const Navber = ({ buyProduct }) => {
  return (
    <div className="shadow-sm">
      <div className="flex justify-between container mx-auto items-center py-4">
        <div className="">
          <a className=" font-bold text-4xl bg-linear-to-r from-[#4F39F6] to-violet-700 bg-clip-text text-transparent ">
            DigiTools
          </a>
        </div>
        <ul className="flex gap-5 font-semibold text-gray-700">
          <li className="hover:text-gray-950 hover:cursor-pointer">Products</li>
          <li className="hover:text-gray-950 hover:cursor-pointer">Features</li>
          <li className="hover:text-gray-950 hover:cursor-pointer">Pricing</li>
          <li className="hover:text-gray-950 hover:cursor-pointer">
            Testimonials
          </li>
          <li className="hover:text-gray-950 hover:cursor-pointer">FAQ</li>
        </ul>
        <div className="">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {' '}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{' '}
                </svg>
                <span
                  className={` ${buyProduct.length === 0 ? 'hidden' : 'badge badge-sm indicator-item  bg-red-400'}`}
                >
                  {buyProduct.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            ></div>
          </div>
          <button className="btn mr-2 ml-2 border-none rounded-full btn-outline text-xl">
            Login
          </button>
          <button className="btn rounded-full bg-linear-to-r from-[#4b37e6] to-violet-400 hover:opacity-90 transition text-white px-7 py-5.5 text-lg">
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
