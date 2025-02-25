import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer } from "react-icons/md";


const Footer = () => {
  return (
    <div className="bg-light rounded-t-3xl">
      <div>
        <div className="container">
          <div className="grid md:grid-cols-4 md:gap-4 py-5 border-gray-300/10 text-black">
            {/* brand info section */}
            <div className="py-8 px-4 space-y-4">
              <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <MdComputer className="text-secondary text-4xl" />
                <p className="">E-Bridge</p>
              </div>
              <p>
                E-Bridge is your ultimate educational hub! From insightful blogs to school management and essential learning resources, we empower students, teachers, and institutions to thrive in the digital era.
              </p>
              <div className="flex items-center justify-start gap-5 !mt-6">
                <a href="#" className="hover:text-secondary duration-200">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            {/* Footer Links  */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="hover:text-secondary duration-200">Home</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">About</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">Services</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">Login</a></li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="hover:text-secondary duration-200">Blogs</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">E-Community</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">Stationery</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">Support</a></li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Company Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="hover:text-secondary duration-200">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">Careers</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* copyright section  */}
          <div>
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-sm text-black/60">
                @copyright 2024 Total Soft Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
