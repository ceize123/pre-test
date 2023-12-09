import { HashLink as Link } from 'react-router-hash-link';
import React, { useState } from 'react';
import Hamburger from './Hamburger';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className='App-header fixed top-0 bg-primary flex items-center h-12 px-8 w-full '>
      {/* Menu */}
      <ul
        className={`flex sm:justify-around justify-center flex-col sm:flex-row items-center absolute sm:static left-0 bg-primary sm:h-6 h-[40vh] w-full transition-all duration-300 ease-out ${
          isOpen ? 'top-12' : '-top-[100vh] sm:top-0'
        } `}
      >
        <li className='hover:text-gray-500 mb-4 sm:mb-0'>
          <Link to='#priceInput' smooth>
            PriceInput
          </Link>
        </li>
        <li className='hover:text-gray-500 mb-4 sm:mb-0'>
          <Link to='#ageGroupSelect' smooth>
            AgeGroupSelect
          </Link>
        </li>
        <li className='hover:text-gray-500'>
          <Link to='#ageGroupPriceList' smooth>
            AgeGroupPriceList
          </Link>
        </li>
      </ul>
      {/* Menu */}
      <Hamburger isOpen={isOpen} handleOnClick={handleOnClick} />
    </header>
  );
};

export default Navigation;
