import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e0/Game_of_Thrones_Season_8.png"
              alt="Logo"
              className="h-18 w-12 mr-2"
            />
            <h1 className="text-xl font-semibold">Game of Thrones Universe</h1>
          </div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/characters" className="hover:text-gray-300">
              Characters
            </Link>
          </li>
          <li>
            <Link to="/continents" className="hover:text-gray-300">
              Continents
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
