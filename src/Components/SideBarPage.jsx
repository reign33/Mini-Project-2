import React, { useState } from "react";
import { FaHome, FaBox, FaUsers, FaCaretDown } from "react-icons/fa";

function SideBarPage() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <div>
          <div className="bg-gray-800 w-1/4 min-h-screen text-white">
            <div className="p-4 text-xl font-bold">
              Dashboard
            </div>
            <ul className="py-4">
              <li className="p-2 hover:bg-gray-700 cursor-pointer">
                <FaHome className="inline-block mr-2" />
                Home
              </li>
              <li className="p-2 hover:bg-gray-700 cursor-pointer">
                <FaBox className="inline-block mr-2" />
                Products
              </li>
              <li
                className={`p-2 cursor-pointer ${
                  isDropdownOpen ? "bg-gray-700" : ""
                }`}
                onClick={toggleDropdown}
              >
                <div className="flex items-center">
                  <FaUsers className="inline-block mr-2" />
                  Users
                  <FaCaretDown
                    className={`ml-auto transform ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {isDropdownOpen && (
                  <ul className="pl-4">
                    <li className="p-2 hover:bg-gray-700 cursor-pointer">User 1</li>
                    <li className="p-2 hover-bg-gray-700 cursor-pointer">User 2</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
    </div>
  )
}

export default SideBarPage