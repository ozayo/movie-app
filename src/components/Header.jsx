// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import ozayLogo from "../assets/oo-logo.svg";
import Search from './Search'; // Arama bileşenini import ediyoruz

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const closeSearch = () => {
    setShowSearch(false); // Arama kutusunu kapatma fonksiyonu
  };

  return (
    <header className="bg-white container mx-auto" aria-label="Main navigation">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" aria-label="Home">
          <img
            src={ozayLogo}
            height={32}
            width={230}
            alt="Movie App"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 items-center" aria-label="Main">
          <Link to="/" className="text-black hover:text-gray-700">
            Home
          </Link>
          <Link to="/movies" className="text-black hover:text-gray-700">
            Movies
          </Link>
          <Link to="/movies/top-rated" className="text-black hover:text-gray-700">
            Top Rated Movies
          </Link>
          <Link to="/favorites" className="text-black hover:text-gray-700">
            My Favorites
          </Link>
        </nav>

        {/* Search Icon */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleSearch} aria-label="Search" className="text-gray-900">
            <FaSearch size={20} />
          </button>

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
      </div>

      {/* Search Input (Gizli başlar, ikona tıklanınca gösterilir) */}
      {showSearch && (
        <div className="bg-white px-4 sm:px-6 lg:px-8 py-4 border-t border-gray-200">
          <Search closeSearch={closeSearch} />
        </div>
      )}

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
          <Link to="/favorites" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            My Favorites
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
