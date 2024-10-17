import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaFigma,
} from "react-icons/fa"; // React Icons

const Footer = () => {
  return (
    <footer className="py-8 text-center mt-14 bg-white border-t border-gray-100" aria-label="Footer">

      {/* Social Media Links */}
      <div
        className="flex gap-3 justify-center text-gray-500"
        aria-label="Social Media Links"
      >
        <a
          href="#"
          aria-label="Github"
          className="hover:text-gray-600 text-black"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithubSquare size="1.3em" />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-gray-600 text-black"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitterSquare size="1.3em" />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="hover:text-gray-600 text-black"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin size="1.3em" />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-gray-600 text-black"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagramSquare size="1.3em" />
        </a>
        <a
          href="#"
          aria-label="Figma"
          className="hover:text-gray-600 text-black"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFigma size="1.3em" />
        </a>
      </div>

      {/* Footer Text */}
      <div className="text-gray-500 text-xs my-2 font-light">
        <p>Chas SEO</p>
        <p>2024 - Özay - Chas Academy</p>
      </div>
    </footer>
  );
};

export default Footer;
