import React from 'react'

const WorkFlow = () => {
  return (
    <div className="bg-linear-to-r from-[#402cd4] to-violet-600 flex items-center justify-center ">
      <div className=" container mx-auto py-30 text-center">
        <h3 className="text-3xl md:text-5xl font-bold text-white pb-5">
          Ready to Transform Your Workflow?
        </h3>
        <p className="text-gray-300 pb-10 px-2 md:px-0">
          Join thousands of professionals who are already using Digi tools to
          work smarter. <br /> Start your free trial today.
        </p>
        <button className="btn rounded-full py-6 mr-3 text-indigo-500 mb-2 md:mb-0">
          Explore Products
        </button>
        <button className="btn btn-outline border-white py-6 px-9 rounded-full text-white hover:text-black ">
          View Pricing
        </button>
        <p className="text-gray-200 mt-5">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
}

export default WorkFlow