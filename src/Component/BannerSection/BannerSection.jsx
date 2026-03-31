import React from 'react';
import BannerImg from '../../assets/banner.png';

const BannerSection = () => {
  return (
    <div className="container mx-auto mt-20 flex flex-col-reverse lg:flex-row items-center gap-10">
      <div className="space-y-7 text-center lg:text-left px-4 md:px-0">
        <div className="badge badge-soft badge-primary font-semibold px-3 md:px-8 text-[13px] md:text-[16px] py-4 rounded-full">
          <i className="fa-regular fa-circle-dot"></i>
          New: AI-Powered Tools Available
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-800">
          Supercharge Your Digital Workflow
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Access premium AI tools, design assets, templates, and productivity{' '}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
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
      <div className="px-4 md:px-0">
        <img className=" lg:max-w-xl shadow-2xl" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default BannerSection;
