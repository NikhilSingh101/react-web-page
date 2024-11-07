import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#2699fb] p-4 py-[10px]">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white">
        <div>
            <h1 className="w-full text-3xl font-bold text-black">
              Nikhil
            </h1>
            <p className="py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
              ullam iste repellat consequatur libero reiciendis, blanditiis
              accusantium.
            </p>
          <div className="flex flex-col items-center">
            <div className="w-[50%] flex justify-between md:w-[75%] md:my-6">
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
              <FaGithubSquare size={30} />
            </div>
          </div>
        </div>
        <div className="md:w-full lg:col-span-2 md:flex justify-between mt-6">
          <div className="flex flex-col items-center">
            <h6 className="font-medium text-black md:text-xl text-2xl">
              Solutions
            </h6>
            <ul>
              <li className="py-2 md:text-sm text-lg">Analytics</li>
              <li className="py-2 md:text-sm text-lg">Marketing</li>
              <li className="py-2 md:text-sm text-lg">Commerce</li>
              <li className="py-2 md:text-sm text-lg">Insights</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="font-medium text-black md:text-xl text-2xl">
              Support
            </h6>
            <ul>
              <li className="py-2 md:text-sm text-lg">Pricing</li>
              <li className="py-2 md:text-sm text-lg">Document</li>
              <li className="py-2 md:text-sm text-lg">Guides</li>
              <li className="py-2 md:text-sm text-lg">API Status</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="font-medium text-black md:text-xl text-2xl">
              Company
            </h6>
            <ul>
              <li className="py-2 md:text-sm text-lg">About</li>
              <li className="py-2 md:text-sm text-lg">Blog</li>
              <li className="py-2 md:text-sm text-lg">Jobs</li>
              <li className="py-2 md:text-sm text-lg">Press</li>
              <li className="py-2 md:text-sm text-lg">Careers</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="font-medium text-black md:text-xl text-2xl">
              Legal
            </h6>
            <ul>
              <li className="py-2 md:text-sm text-lg">Claim</li>
              <li className="py-2 md:text-sm text-lg">Policy</li>
              <li className="py-2 md:text-sm text-lg">Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-black">All rights reserved copyright@2023</p>
    </div>
  );
};

export default Footer;
