import React from 'react'
import User from "../../assets/user.png";
import Rocket from "../../assets/rocket.png";
import Play from "../../assets/play.png";
import Package from "../../assets/package.png";


const GetStart = () => {
  return (
    <div className="mt-28 bg-gray-100 pb-24">
      <div className="text-center mb-12 pt-24 space-y-4 px-3 md:px-0">
        <h3 className="text-4xl md:text-6xl font-bold text-gray-700">
          Get Started in 3 Steps
        </h3>
        <p className="text-gray-500 text-[15px] md:text-xl">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div>
        <div className="flex flex-col md:flex-row px-4 md:px-0 gap-10 container mx-auto">
          <div className="bg-white rounded-2xl p-5 ">
            <div className="flex justify-end">
              <p className="bg-linear-to-r from-[#402cd4] to-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                01
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 justify-center px-10 text-center py-15">
              <img
                className="bg-purple-200 p-4 rounded-full "
                src={User}
                alt=""
              />
              <h4 className="text-3xl font-semibold">Create Account</h4>
              <p className="font-semibold text-gray-500">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 ">
            <div className="flex justify-end">
              <p className="bg-linear-to-r from-[#402cd4] to-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                02
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 justify-center px-10 text-center py-15">
              <img
                className="bg-purple-200 p-4 rounded-full "
                src={Package}
                alt=""
              />
              <h4 className="text-3xl font-semibold">Choose Products</h4>
              <p className="font-semibold text-gray-500">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 ">
            <div className="flex justify-end">
              <p className="bg-linear-to-r from-[#402cd4] to-violet-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                03
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 justify-center px-10 text-center py-15">
              <img
                className="bg-purple-200 p-3 rounded-full "
                src={Rocket}
                alt=""
              />
              <h4 className="text-3xl font-semibold">Start Creating</h4>
              <p className="font-semibold text-gray-500">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStart