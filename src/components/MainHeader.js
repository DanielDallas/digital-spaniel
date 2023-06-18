import React, { useEffect, useState, useCallback } from 'react';
import logo from './logo.png'; // Import your logo image

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setScrollDirection(prevScrollPos > currentScrollPos ? 'up' : 'down');
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    const scrollListener = () => handleScroll();

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [handleScroll]);

  return (
    <header
      className={`${
        scrollDirection === 'down' ? 'fixed top-0 slide-in' : 'slide-out'
      } z-10 w-full`}
    >
      <div className="container flex items-center justify-between mx-auto py-4">
        <div className="flex items-center">
          <img
            className="w-8 h-8 mr-2"
            src={logo}
            alt="Digital Spaniel Agency"
          />
          {/* <span className="font-bold text-white">Logo</span> */}
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;