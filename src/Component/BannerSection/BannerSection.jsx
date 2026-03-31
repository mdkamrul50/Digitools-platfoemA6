import React from 'react';
import BannerImg from '../../assets/banner.png';

const BannerSection = () => {
  return (
    <div className="container mx-auto mt-20 flex items-center">
      <div className="space-y-7 ">
        <div className="badge badge-soft badge-primary font-semibold  px-8 py-4 rounded-full">
          <i className="fa-regular fa-circle-dot"></i>
          New: AI-Powered Tools Available
        </div>
        <h2 className="text-7xl font-bold text-gray-800">
          Supercharge Your Digital Workflow
        </h2>
        <p className="text-xl text-gray-600">
          Access premium AI tools, design assets, templates, and productivity{' '}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex items-center">
          <button className="btn bg-linear-to-r from-[#4b37e6] to-violet-400  text-white py-6 rounded-full mr-2 ">
            Explore Products
          </button>
          <button className="btn btn-outline border-indigo-500 rounded-full  py-6 text-indigo-500">
            {' '}
            <i className="fa-solid fa-play"></i>
            Watch Demo
          </button>
        </div>
      </div>
      <div className="">
        <img className="h-150 w-160 shadow-2xl" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default BannerSection;
