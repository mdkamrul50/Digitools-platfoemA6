import React from 'react';

const FooterSection = () => {
  return (
    <div className="bg-gray-800 text-white pt-30">
      <div className=" container mx-auto grid grid-cols-2 text-center md:flex  justify-between border-b border-b-gray-500 pb-20 px-3 md:px-0">
        <div className="">
          <h4 className="text-3xl md:text-4xl font-bold pb-5">DigiTools</h4>
          <p className="text-gray-300 text-sm md:text-[16px]">
            Premium digital tools for creators,
            <br /> professionals, and businesses. Work smarter <br /> with our
            suite of powerful tools.
          </p>
        </div>
        <div className="">
          <h4 className="text-xl font-semibold pb-5">Product</h4>
          <ul className="text-gray-300 space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-xl font-semibold pb-5">Company</h4>
          <ul className="text-gray-300 space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-xl font-semibold pb-5">Resources</h4>
          <ul className="text-gray-300 space-y-2">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=" mt-3 md:mt-0">
          <h4 className="text-xl font-semibold pb-5">Social Links</h4>
          <div className="flex justify-center md:justify-self-start gap-2 text-3xl">
            <div>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div>
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 flex md:justify-between text-center md:text-start container mx-auto text-gray-400 font-semibold px-8">
        <div className="text-sm md:text[16px] pr-1 md:pr-0">
          © 2026 Digitools. All rights reserved.
        </div>
        <div className="flex  gap-0 md:gap-5 px-3 md:px-0">
          <p>Privacy Policy </p>
          <p className="">Terms of Service </p>
          <p className="hidden md:inline-block"> Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
