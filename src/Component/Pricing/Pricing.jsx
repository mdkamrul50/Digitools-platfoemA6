import React from 'react'

const Pricing = () => {
  return (
    <div className="my-32">
      <div className="text-center space-y-5 px-3 md:px-0">
        <h3 className="text-4xl md:text-6xl font-bold text-gray-700">
          Simple, Transparent Pricing
        </h3>
        <p className="text-gray-500 text-xl pb-8">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div
        className="flex flex-col px-4 md:px-0 md:flex-row gap-8 container mx-auto
      "
      >
        <div className="p-6 rounded-3xl flex-1 bg-gray-100">
          <h4 className="text-3xl font-semibold pb-2">Starter</h4>
          <p className="text-xl text-gray-600  pb-5">
            Perfect for getting started
          </p>
          <p className="text-xl text-gray-600 pb-5">
            <span className="text-4xl font-bold text-gray-800 ">$0</span>
            /Month
          </p>
          <ul className="font-semibold text-gray-600 space-y-2">
            <li>
              <i className="fa-solid fa-check text-green-500"></i>Access to 10
              free tools
            </li>
            <li>
              <i className="fa-solid fa-check  text-green-500"></i>Access to 10
              free tools Basic templates
            </li>
            <li>
              <i className="fa-solid fa-check  text-green-500"></i>Access to 10
              free tools Community support
            </li>
            <li>
              <i className="fa-solid fa-check  text-green-500"></i>Access to 10
              free tools 1 project per month
            </li>
          </ul>
          <button className="btn mt-18 w-full rounded-full bg-linear-to-r from-[#402cd4] to-violet-600 text-white ">
            Get Started Free
          </button>
        </div>
        <div className="p-6 rounded-3xl flex-1 bg-linear-to-r from-[#402cd4] to-violet-600 text-white relative">
          <div className="badge badge-soft badge-warning absolute -top-3 left-45 h-8 rounded-full">
            Most Popular
          </div>
          <h4 className="text-3xl font-semibold pb-2">Pro</h4>
          <p className="text-xl text-gray-200  pb-5">Best for professionals</p>
          <p className="text-xl text-gray-200 pb-5">
            <span className="text-4xl font-bold text-white ">$29</span>
            /month
          </p>
          <ul className="font-semibold text-gray-200 space-y-2">
            <li>
              <i className="fa-solid fa-check text-green-500"></i>Access to all
              premium tools
            </li>
            <li>
              <i className="fa-solid fa-check  text-green-500"></i>Unlimited
              templates
            </li>
            <li>
              <i className="fa-solid fa-check  text-green-500"></i>Priority
              support
            </li>
            <li>
              <i className="fa-solid fa-check  text-green-500"></i>Priority
              support
            </li>
            <li>
              <i className="fa-solid fa-check  text-green-500"></i>Advanced
              analytics
            </li>
          </ul>
          <button className="btn mt-10 w-full rounded-full bg-white text-black border-none">
            Get Started Free
          </button>
        </div>
        <div className="p-6 rounded-3xl flex-1 bg-gray-100">
          <h4 className="text-3xl font-semibold pb-2">Enterprise</h4>
          <p className="text-xl text-gray-600  pb-5">
            For teams and businesses
          </p>
          <p className="text-xl text-gray-600 pb-5">
            <span className="text-4xl font-bold text-gray-800 ">$99</span>
            /Month
          </p>
          <ul className="font-semibold text-gray-600 space-y-2">
            <li>
              <i className="fa-solid fa-check text-green-500"></i>Everything in
              Pro
            </li>
            <li>
              <i className="fa-solid fa-check  text-green-500"></i>Team
              collaboration
            </li>
            <li>
              <i className="fa-solid fa-check  text-green-500"></i>Custom
              integrations
            </li>
            <li>
              <i className="fa-solid fa-check  text-green-500"></i>Dedicated
              support
            </li>
            <li>
              <i className="fa-solid fa-check  text-green-500"></i>SLA guarantee
            </li>
            <li>
              <i className="fa-solid fa-check  text-green-500"></i>Custom
              branding
            </li>
          </ul>
          <button className="btn mt-4 w-full rounded-full bg-linear-to-r from-[#402cd4] to-violet-600 text-white">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing