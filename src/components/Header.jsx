import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-between text-center">
        <h1 className="flex text-4xl font-bold text-center p-8">
        <img src=".\src\assets\booklogo.png" alt="library system logo" className="w-16 h-14"/><Link to="/home" className="mt-2">Online Library System</Link>
        </h1>
        <ul className="flex items-center gap-12 mr-20">
          <Link to="/home">
            <li className="scale-95 hover:scale-105 hover:font-medium hover:text-orange-600">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="scale-95 hover:scale-105 hover:font-medium hover:text-orange-600">
              About
            </li>
          </Link>
          <Link to="/browsebooks">
            <li className="scale-95 hover:scale-105 hover:font-medium hover:text-orange-600">
              Browse books
            </li>
          </Link>
          <Link to="/addbookpage">
            <li className="scale-95 hover:scale-105 hover:font-medium hover:text-orange-600">
              Add book
            </li>
          </Link>
          <li>Sign In</li>
        </ul>
      </div>
      <hr className="text-gray-300" />
    </>
  );
}

export default Header;
