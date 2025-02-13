import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FAF7ED] py-4 px-6 md:px-16 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="Logo" className="h-10" />
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li>
            <Link to={"/"} className="hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:text-gray-500">
              About us
            </Link>
          </li>
          <li className="relative">
            <Link to={"#"} className="items-center hover:text-gray-500">
              Mission
            </Link>
          </li>
          <li>
            <Link to={"#"} className="hover:text-gray-500">
              Gallery
            </Link>
          </li>
          <li>
            <Link to={"#"} className="hover:text-gray-500">
              Donate
            </Link>
          </li>
          <li>
            <Link to={"#"} className="hover:text-gray-500">
              Projects
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="hover:text-gray-500">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF7ED] p-4 mt-2 shadow-md">
          <ul className="space-y-4 text-gray-800 text-center font-medium">
            <li>
              <Link to={"#"} className="block">
                Home
              </Link>
            </li>
            <li>
              <Link to={"#"} className="block">
                About us
              </Link>
            </li>
            <li className="relative">
              <Link to={"#"} className="block w-full text-left font-bold">
                Mission
              </Link>
            </li>
            <li>
              <Link to={"#"} className="block">
                Camera Roll
              </Link>
            </li>
            <li>
              <Link to={"#"} className="block">
                Donate
              </Link>
            </li>
            <li>
              <Link to={"#"} className="block">
                Impact Statements
              </Link>
            </li>
            <li>
              <Link to={"#"} className="block">
                Connect
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
