import React from "react";
import { NavLink,Outlet } from "react-router-dom"; 
import { FaHome, FaBuilding, FaUser, FaPaypal } from 'react-icons/fa';
import Logo from '../../assets/CareerFlow-Logo.png';

const Sidebar = () => {
  return (
    <>
      <div className="w-full h-12 bg-white shadow-md">
        <div className="flex justify-start items-center">
          <img className="w-32 p-2" src={Logo} alt="Logo" />
        </div>
      </div>
    <div className="flex">
      <div className="lg:w-64 h-screen bg-white shadow-lg rounded text-black lg:flex-shrink-0">
        <ul className="text-black font-sans px-2 font-semibold lg:flex-col lg:w-full">
          <NavLink to={'/admin/dashboard'} className={({isActive}) => {
            return `lg:w-full py-3 px-5 w-1/2 text-black rounded-md hover:bg-blue-500 hover:text-white border-b-2 flex gap-2 items-center mt-2${isActive ? ' text-white bg-blue-500':''} `
          }}>
            <FaHome /> Dashboard
          </NavLink>
          <NavLink  to={'/admin/company-approval ' }className={({isActive})=>{
            return `lg:w-full py-3 px-5 w-1/2 text-black rounded-md hover:bg-blue-500 hover:text-white border-b-2 flex gap-2 items-center mt-2 ${isActive ? `text-white bg-blue-500` : ''}`
          }}>
            <FaBuilding /> Companies
          </NavLink>
          <li className="lg:w-full py-3 px-5 w-1/2 text-black rounded-md border-b-2 flex gap-2 items-center mt-2 hover:text-white hover:bg-blue-500">
            <FaBuilding /> Company Registration
          </li>
          <li className="lg:w-full py-3 px-5 w-1/2 text-black rounded-md hover:bg-blue-500 hover:text-white border-b-2 flex gap-2 items-center mt-2 ">
            <FaUser /> Users
          </li>
          <li className="lg:w-full py-3 px-5 w-1/2 text-black rounded-md hover:bg-blue-500 hover:text-white border-b-2 flex gap-2 items-center mt-2">
            <FaPaypal /> Payment
          </li>
        </ul>
      </div>
      <div className="w-full bg-gray-100">
        <Outlet/>
      </div>
    </div>
    </>
  );
};

export default Sidebar;