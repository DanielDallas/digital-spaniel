import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollDirection(prevScrollPos > currentScrollPos ? 'up' : 'down');
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
            src="src/DigitalSpaniellogo.png"
            alt="Logo"
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