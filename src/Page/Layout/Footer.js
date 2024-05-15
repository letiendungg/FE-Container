import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-bgFooter ">
      <div className="grid grid-cols-2 md:grid-cols-5 justify-center py-4 mx-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold">Services & Information</p>
          <p className="text-sm">Offices & Local Info</p>
          <p className="text-sm">Containers</p>
          <p className="text-sm">Vessels</p>
          <p className="text-sm">Contact</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold">Online Business Suite</p>
          <p className="text-sm">Quick Quotes</p>
          <p className="text-sm">Schedule</p>
          <p className="text-sm">Booking</p>
          <p className="text-sm">Tracking</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold">Career</p>
          <p className="text-sm">Working Ashore</p>
          <p className="text-sm">Working on Board</p>
          <p className="text-sm">Vacancies</p>
          <p className="text-sm">Apprenticeship</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold">Press</p>
            <p className="text-sm">Press Releases</p>
            <p className="text-sm">Photos & Videos</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold">Investor Relations</p>
            <p className="text-sm">Overview</p>
            <p className="text-sm">Share</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold">Find us on</p>
          <div className="grid grid-cols-3 gap-2">
            <FaSquareFacebook className="text-subMain w-6 h-6" />
            <FaTiktok className="text-subMain w-6 h-6" />
            <FaInstagram className="text-subMain w-6 h-6" />
            <FaYoutube className="text-subMain w-6 h-6" />
            <FaSquareXTwitter className="text-subMain w-6 h-6" />
            <IoIosChatbubbles className="text-subMain w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="border border-b border-slate-400 my-6 "></div>
      <div className="flex gap-8 p-4 justify-center">
        <div className="flex gap-4 items-center">
          <p className="text-xs font-bold">Terms and Conditions:</p>
          <p className="text-xs px-4 border-r border-slate-300 ">
            {" "}
            Terms of Use Website
          </p>
          <p className="text-xs px-4 border-r border-slate-300">
            {" "}
            Terms of Transport
          </p>
          <p className="text-xs px-4 border-r border-slate-300">
            {" "}
            Terms of Purchase
          </p>
          <p className="text-xs px-4 border-r border-slate-300"> Imprint</p>
          <p className="text-xs px-4 border-r border-slate-300">
            {" "}
            Privacy Terms
          </p>
        </div>
        <p className="flex items-center text-xs gap-2">
          <FaRegCopyright />
          2024 Container. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
