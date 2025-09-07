import React from "react";
import {
  FaChevronDown,
  FaWhatsapp,
  FaAngleDown,
} from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { PiMagnifyingGlass } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";

export default function Page2() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-red-600 text-white py-4 mb-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-2">
          <div className="flex items-center gap-5">
            <span className="text-2xl font-bold">magicbricks</span>
          </div>
          <nav className="flex flex-wrap gap-4 items-center text-lg">
            <span className="flex items-center gap-3">
              Buy <FaAngleDown />
            </span>
            <span className="flex items-center gap-3">
              Sell <FaAngleDown />
            </span>
            <span className="flex items-center gap-3">
              Tools & advice <FaAngleDown />
            </span>
            <span className="flex items-center gap-3">
              Whats New <FaAngleDown />
            </span>
            <span className="flex items-center gap-3">
              Home Loans <FaAngleDown />
            </span>
            <span className="flex items-center gap-3">
              Help <FaAngleDown />
            </span>
          </nav>
          <div className="flex gap-4 items-center">
            <button className="px-4 py-2 rounded bg-red-600 text-white text-lg flex gap-3 items-center border border-white">
              My Activity
              <FaAngleDown />
            </button>
            <button className="relative ml-2 px-4 py-2 rounded bg-white text-black text-lg font-semibold flex items-center">
              Post Property
              <span className="bg-yellow-400 rounded-full text-black text-[10px] font-bold px-2 py-0.5 ml-2">
                FREE
              </span>
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-2 md:px-4 py-6 flex flex-col md:flex-row gap-6">
        {/* Left: Form */}
        <div className="flex-1 min-w-0 flex justify-around">
          <div>
            <div className="mb-7">
              <h1 className="text-4xl font-semibold mb-3 flex items-center">
                Sell or Rent your Property
              </h1>
              <div className="mb-2">
                <span className="text-gray-700 font-medium text-lg">
                  You are posting this property for{" "}
                  <span className="inline-block bg-yellow-400 text-black px-1 rounded font-bold">
                    FREE
                  </span>
                </span>
              </div>
            </div>
            {/* Form Card */}
            <div className="bg-white w-full max-w-2xl">
              {/* Personal Details */}
              <form className="space-y-9">
                <div>
                  <div className="font-semibold text-gray-800 mb-5 text-2xl">
                    Personal Details
                  </div>
                  <div className="mb-4 flex gap-5 text-lg">
                    I am
                    <div className="flex gap-3">
                      {[
                        { label: "Owner", color: "text-red-600" },
                        { label: "Agent", color: "text-gray-800" },
                        { label: "Builder", color: "text-gray-800" },
                      ].map((type) => (
                        <label
                          key={type.label}
                          className="flex items-center mr-4 cursor-pointer gap-1 mb-4"
                        >
                          <input
                            type="radio"
                            name="userType"
                            className="accent-red-600"
                            defaultChecked={type.label === "Owner"}
                          />
                          <span className={`font-medium ${type.color}`}>
                            {type.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Name */}
                  <div className="mb-5">
                    <label className="block text-gray-700 text-lg font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="block w-full border-b-2 border-gray-200 focus:border-red-600 outline-none py-1 text-lg"
                    />
                  </div>
                  {/* Mobile */}
                  <div className="mb-2">
                    <label className="block text-gray-700 text-lg font-medium mb-1">
                      Mobile
                    </label>
                    <div className="flex gap-5">
                      <select
                        name="mobile"
                        className="border-none outline-none py-2 text-lg"
                      >
                        <option>IND +91</option>
                      </select>

                      <input
                        type="text"
                        placeholder="9490790633"
                        className="block w-full border-b-2 border-gray-200 focus:border-red-600 outline-none py-1 text-lg"
                      />
                    </div>
                  </div>
                  {/* WhatsApp Notice */}
                  <div className="bg-yellow-100 border-2 border-yellow-300 rounded p-3 flex items-center gap-2 mt-2 text-gray-700 text-lg">
                    Enter your <FaWhatsapp className="text-green-600 text-lg" />{" "}
                    WhatsApp No. to get enquiries from Buyer/Tenant
                  </div>
                  {/* Email */}
                  <div className="mt-5 mb-2">
                    <label className="block text-gray-700 text-lg font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="block w-full border-b-2 border-gray-200 focus:border-red-600 outline-none py-1 text-lg"
                    />
                  </div>
                </div>
                {/* Property Details */}
                <div>
                  <div className="font-semibold text-gray-800 mb-5 text-2xl">
                    Property Details
                  </div>
                  <div className="mb-6">
                    <div className="flex gap-3 text-lg">
                      For
                      {[
                        { label: "Sale", color: "text-gray-800" },
                        { label: "Rent/Lease", color: "text-red-600" },
                        { label: "PG/Hostel", color: "text-gray-800" },
                      ].map((type) => (
                        <label
                          key={type.label}
                          className="flex items-center cursor-pointer gap-1 text-lg"
                        >
                          <input
                            type="radio"
                            name="forType"
                            className="accent-red-600"
                            defaultChecked={type.label === "Rent/Lease"}
                          />
                          <span className={`font-medium ${type.color}`}>
                            {type.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Property Type */}
                  <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-medium mb-1">
                      Property Type
                    </label>
                    <div className="relative">
                      <select className="block w-full border-b-2 border-gray-200 outline-none py-1 appearance-none text-lg">
                        <option>Select Property Type</option>
                        {/* Add more options as appropriate */}
                      </select>
                      <FaChevronDown className="absolute right-2 top-3 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
                {/* Property Location */}
                <div>
                  <div className="font-semibold text-gray-800 mb-6 text-2xl">
                    Property Location
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-medium mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter City"
                      className="block w-full border-b-2 border-gray-200 focus:border-red-600 outline-none py-1 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-lg font-medium mb-1">
                      Locality
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Locality"
                      className="block w-full border-b-2 border-gray-200 focus:border-red-600 outline-none py-1 text-lg"
                    />
                  </div>
                </div>
                {/* Checkboxes */}
                <div className="space-y-3 mt-20">
                  <label className="flex items-center gap-2 text-lg cursor-pointer">
                    <input
                      type="checkbox"
                      className="accent-red-600"
                      defaultChecked
                    />
                    I am posting this property exclusively on Magicbricks
                  </label>
                  <label className="flex items-center gap-2 text-lg cursor-pointer">
                    <input
                      type="checkbox"
                      className="accent-red-600"
                      defaultChecked
                    />
                    I agree to Magicbricks T&C, Privacy Policy & Cookie Policy
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div>
            <img
              src="https://thvnext.bing.com/th/id/OIP.CnUcCUkENHhynReDRfHVcQHaLJ?w=139&h=210&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3"
              alt="image"
            />
          </div>
        </div>
        {/* Right: Sidebar Card */}
        <div className="w-full md:w-96 flex-shrink-0">
          <h4 className="text-gray-700 font-semibold text-2xl mb-3">
            How to find the right{" "}
            <span className="text-green-600 font-bold">Tenant?</span>
          </h4>
          <div className="bg-white rounded-lg border border-gray-300 p-5">
            <div className="divide-y divide-gray-200">
              {/* Respond to Tenant Enquiries */}
              <div className="py-3 flex gap-3 items-start">
                <PiMagnifyingGlass className="mt-1 text-blue-400 text-4xl min-w-[1.5rem]" />
                <div>
                  <div className="text-xl font-semibold text-green-600">
                    Respond to Tenant enquiries
                  </div>
                  <div className="text-gray-700 text-sm">
                    Connect with Tenants when they contact on your property
                    <br />
                    View upto 5 contact details for FREE!
                  </div>
                </div>
              </div>
              {/* Connect with Matching Tenants */}
              <div className="py-3 flex gap-3 items-start">
                <RxPerson className="mt-1 text-blue-400 text-4xl min-w-[1.5rem]" />
                <div>
                  <div className="text-xl font-semibold text-green-600">
                    Connect with Matching Tenants
                  </div>
                  <div className="text-gray-700 text-sm">
                    Actively reach for matching Tenants & connect
                  </div>
                </div>
              </div>
              {/* Download the App */}
              <div className="py-3 flex gap-3 items-start">
                <HiOutlineDownload className="mt-1 text-blue-400 text-4xl min-w-[1.5rem]" />
                <div>
                  <div className="text-xl font-semibold text-green-600">
                    Download the App
                  </div>
                  <div className="text-gray-700 text-sm">
                    Get notified on our new Tenant enquiries and connect
                    instantly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
