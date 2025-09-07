import React from "react";
import {
  FaRegHeart,
  FaHome,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaCheckCircle,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosCloseCircleOutline } from "react-icons/io";
import { BiSortAlt2 } from "react-icons/bi";
import { MdOutlinePercent } from "react-icons/md";
import { TbShare3 } from "react-icons/tb";
const Page1 = () => {
  const properties = [
    {
      id: 1,
      title: "2 BHK House for Sale in Banjara Chandanpagutta Hyderabad",
      price: "₹6.3 Lac",
      originalPrice: "₹7 Lac",
      pricePerSqft: "₹778 per sqft",
      area: "810 sqft",
      status: "Ready to Move",
      transaction: "Resale",
      owner: "Adil Qureshi",
      updatedTime: "Updated 1 week ago",
      isSpecialPrice: true,
      description:
        "This Residential House is built over 1 floors. The construction has been done keeping in mind the vastu compliance...",
    },
    {
      id: 2,
      title: "2 BHK House for Sale in Qasim Pura, Masab Tank Hyderabad",
      price: "₹10 Lac",
      pricePerSqft: "₹1,667 per sqft",
      area: "600 sqft",
      status: "Ready to Move",
      transaction: "Resale",
      owner: "Shaik Mukhtadar",
      updatedTime: "Updated 3 months ago",
      description:
        "This Residential House is built over 8 floors. The construction has been done keeping in mind the vastu compliance...",
    },
    {
      id: 3,
      title: "3 BHK Builder Floor for Sale in West Marredpally Hyderabad",
      price: "₹3.2 Lac",
      pricePerSqft: "₹2,783 per sqft",
      area: "1145 sqft",
      status: "Ready to Move",
      transaction: "1 out of 2",
      owner: "Virender Singh Thakur",
      updatedTime: "Updated 4 weeks ago",
      description:
        "3 BHK Builder Floor Apartment is available for Sale in West Marredpally, Hyderabad for...",
    },
    {
      id: 4,
      title: "2 BHK House for Sale in Masab Tank Hyderabad",
      price: "₹2.7 Lac",
      pricePerSqft: "₹3,507 per sqft",
      area: "770 sqft",
      status: "Ready to Move",
      transaction: "Resale",
      owner: "Srinivasa Apartments",
      updatedTime: "Updated Oct 26, 23",
      description:
        "2 BHK Residential House is available for Sale in Masab Tank, Hyderabad for 270 Lacs...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-600 text-white p-4">
        <div className="lg:mx-[10vw] flex items-center gap-1 flex-wrap">
          <div className="flex items-center bg-white text-black py-3 pr-2 rounded-full gap-3">
            <div className="flex gap-6 items-center px-4 border-r-2 border-gray-300">
              <h2 className="font-medium text-gray-600 text-lg">Buy</h2>
              <IoIosArrowDown className="h-5 w-5 text-red-500" />
            </div>
            <h2 className="bg-red-100 rounded-full px-2">Hyderbad</h2>
            <input
              type="text"
              placeholder="Add More"
              className="border-none outline-none"
            />
          </div>

          <div className="flex gap-3 bg-white text-black rounded-full px-4 py-3 items-center">
            <h2 className="font-medium text-gray-600 text-lg">
              Top Localities
            </h2>
            <IoIosArrowDown className="h-5 w-5 text-red-500" />
          </div>

          <div className="flex gap-2 bg-red-100 text-black rounded-full px-4 py-3 items-center">
            <h2 className="font-medium text-gray-600 text-lg">Upto 10 Lacs</h2>
            <IoIosCloseCircleOutline className="h-7 w-7 text-red-500" />
          </div>

          <div className="flex gap-2 bg-red-100 text-black rounded-full px-4 py-3 items-center">
            <h2 className="font-medium text-gray-600 text-lg">Flat +1</h2>
            <IoIosCloseCircleOutline className="h-7 w-7 text-red-500" />
          </div>

          <div className="flex gap-2 bg-red-100 text-black rounded-full px-4 py-3 items-center">
            <h2 className="font-medium text-gray-600 text-lg">2,3 BHK</h2>
            <IoIosCloseCircleOutline className="h-7 w-7 text-red-500" />
          </div>

          <div className="flex gap-3 bg-white text-black rounded-full px-4 py-3 items-center">
            <h2 className="font-medium text-gray-600 text-lg">Posted By</h2>
            <IoIosArrowDown className="h-5 w-5 text-red-500" />
          </div>

          <div className="flex gap-3 bg-white text-black rounded-full px-4 py-3 items-center">
            <span className="h-6 w-6 bg-black text-white px-2 rounded-full font-bold">
              7
            </span>
            <h2 className="font-medium text-gray-600 text-lg">More Filters</h2>
            <IoIosArrowDown className="h-5 w-5 text-red-500" />
          </div>
        </div>
      </div>

      <div className="lg:mx-[4vw] p-4 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="text-sm text-gray-600 mb-6">
            Home › Hyderabad Real Estate › 2 BHK For Sale In Hyderabad
            <span className="block lg:inline float-none lg:float-right mt-2 lg:mt-0">
              Last Updated: 26 December 2023
            </span>
          </div>

          <div className="border-b border-b-gray-400 mb-6 flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="flex gap-4 overflow-x-auto">
              <div className="px-4 py-2 border-2 border-gray-300 border-b-4 border-b-red-500 text-black text-sm sm:text-lg font-medium rounded-t-lg whitespace-nowrap">
                Properties (351)
              </div>
              <button className="px-4 py-2 border-2 border-gray-300 border-b-transparent  text-gray-500 text-sm sm:text-lg font-medium rounded-t-lg whitespace-nowrap">
                New Projects (1,692)
              </button>
              <button className="px-4 py-2 border-2 border-gray-300 border-b-transparent text-gray-500 text-sm sm:text-lg font-medium rounded-t-lg whitespace-nowrap">
                Top Agents
              </button>
            </div>
            <div className="flex gap-2 items-center px-2 m-2 sm:m-0 rounded-full border-2 border-gray-300">
              <BiSortAlt2 />
              <h2 className="text-gray-500 text-sm sm:text-base">
                Sort By: Relevence
              </h2>
              <IoIosArrowDown />
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-600">
              351 results | Residential Properties for Sale in Hyderabad
            </h1>
          </div>

          <div className="gap-2">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white border-2 border-gray-300 rounded-lg hover:shadow-lg mb-5"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col p-4">
                    <div className="md:w-64 md:h-48 w-full h-40 bg-red-50 rounded-lg flex flex-col items-center justify-center">
                      <div className="items-center justify-center text-gray-500">
                        <FaHome className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">No Image Available</p>
                      </div>
                    </div>
                    <div className="px-2 bg-gray-700 text-white rounded-b-lg">
                      <h2>{property.updatedTime}</h2>
                    </div>
                    <h2 className="mt-5">Owner: {property.owner}</h2>
                  </div>

                  <div className="flex-1 py-3 px-4">
                    <div className="flex justify-between flex-wrap gap-2 mb-4">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-700 leading-tight py-2">
                        {property.title}
                      </h3>
                      <div className="flex gap-2 p-2">
                        <FaRegHeart className="w-5 h-5 text-gray-600 cursor-pointer" />

                        <TbShare3 className="w-5 h-5 text-gray-600 cursor-pointer" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4 bg-gray-100 px-5 py-3 rounded-lg">
                      <div className="flex gap-4 items-center border-r-2 border-r-gray-300">
                        <div className="flex items-center text-xs text-gray-600 mb-1">
                          <FaRulerCombined className="w-8 h-8" />
                        </div>
                        <div className="font-medium flex flex-col">
                          <span className="text-gray-500">SUPER AREA</span>
                          <span>{property.area}</span>
                        </div>
                      </div>
                      <div className="flex gap-4 border-r-2 border-r-gray-300">
                        <div className="flex items-center text-xs text-gray-600 mb-1">
                          <FaMapMarkerAlt className="w-8 h-8" />
                        </div>
                        <div className="font-medium flex flex-col">
                          <span className="text-gray-500">STATUS</span>
                          <span>{property.status}</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center text-xs text-gray-600 mb-1">
                          <FaHome className="w-8 h-8" />
                        </div>
                        <div className="font-medium flex flex-col">
                          <span className="text-gray-500">Transaction</span>
                          <span>{property.transaction}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center mb-2">
                      {property.isSpecialPrice && (
                        <span className="text-sm flex gap-1 items-center text-black font-medium">
                          <MdOutlinePercent className="w-5 h-5 bg-amber-300 p-1 rounded-full" />
                          Special Price{" "}
                          <span className="text-gray-600">
                            {" "}
                            Offered by Owner
                          </span>
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {property.description}
                    </p>
                  </div>

                  <div className="w-full md:w-64 text-center bg-gray-200 p-6">
                    {property.originalPrice && (
                      <div className="text-sm text-gray-500 line-through mb-1">
                        {property.originalPrice}
                      </div>
                    )}
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      {property.price}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      {property.pricePerSqft}
                    </div>

                    <button className="w-full bg-red-600 text-white py-2 rounded-full mb-2 hover:bg-red-700 text-sm sm:text-base">
                      Contact Owner
                    </button>
                    <button className="w-full border border-red-600 py-2 rounded-full mb-2 hover:bg-gray-50 text-red-600">
                      Get Phone No.
                    </button>
                    <a className="text-sm text-black underline">
                      Calculate EMI
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-80 border border-gray-400 bg-white rounded-lg">
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="text-3xl font-semibold bg-amber-100 p-8 text-center rounded-xl mb-6">
              Sell/Rent your Property with us for
              <span className="text-green-600">Free</span>
            </div>

            <p className="text-xl text-gray-600 mb-6 text-center">
              Find Buyers & Tenants easily
            </p>
            <button className="w-full bg-yellow-400 py-3 rounded-full font-medium hover:bg-yellow-500">
              Post Property
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-4 text-2xl">
              Here's why Magicbricks:
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start space-x-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">Got Access to 4 Lakh+ Buyers</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">
                  Sell Faster with Premium Services
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">Find only Genuine Leads</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">
                  Get Expert advice on Market Trends & Insights
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
