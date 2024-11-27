import React, { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Serviços', path: 'services' },
    { link: 'Sobre', path: 'about' },
    { link: 'Planos', path: 'plans' },
    { link: 'Testemuhnos', path: 'testimonials' },
    { link: 'Contato', path: 'contact' },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center gap-1">
          <h1 className="text-3xl uppercase text-white tracking-tight">
            Web
            <span className="text-lime-300 ml-2">Pulse</span>
          </h1>
        </div>
        <div className="hidden lg:flex items-center gap-8 p-5">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-lime-300 text-lg cursor-pointer hover:text-white font-kanit"
              onClick={closeMenu}
            >
              {item.link}
            </Link>
          ))}
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-lime-300 hover:text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 text-lime-300 py-4 flex flex-col gap-4 px-4 font-kanit tracking-tight">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-lg cursor-pointer font-kanit hover:text-white"
              onClick={closeMenu}
            >
              {item.link}
            </Link>
          ))}s
        </div>
      )}
    </nav>

  );
};

export default Header;