// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // React Icons for menu
import ozayLogo from "../assets/oo-logo.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white container mx-auto" aria-label="Main navigation">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" aria-label="Home">
          <img
            src={ozayLogo}
            height={36}
            width={260}
            alt="My Movies"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4" aria-label="Main">
          <Link to="/" className="text-black hover:text-gray-700">
            Home
          </Link>
          <Link to="/movies" className="text-black hover:text-gray-700">
            Movies
          </Link>
          <Link to="/movies/top-rated" className="text-black hover:text-gray-700">
            Top Rated Movies
          </Link>
          <Link to="/movies/upcoming" className="text-black hover:text-gray-700">
            Upcoming Movies
          </Link>
          <Link to="/tvshows" className="text-black hover:text-gray-700">
            TV Shows
          </Link>
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white shadow-md"
          aria-label="Mobile menu"
        >
          <Link to="/" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link to="/movies" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Movies
          </Link>
          <Link to="/movies/top-rated" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Top Rated Movies
          </Link>
          <Link to="/movies/upcoming" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Upcoming Movies
          </Link>
          <Link to="/tvshows" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            TV Shows
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
