import { HashLink as Link } from 'react-router-hash-link';
import React, { useState } from 'react';
import Hamburger from './Hamburger';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const renderList = ['priceInput', 'ageGroupSelect', 'ageGroupPriceList'].map(
    (item) => (
      <li
        key={item}
        className='hover:text-gray-100 hover:bg-gray-700 mb-4 sm:mb-0 flex-1 h-full w-full rounded-md transition-all duration-100'
        onClick={() => setIsOpen(false)}
      >
        <Link
          className='w-full h-full flex items-center justify-center'
          to={`#${item}`}
          smooth
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      </li>
    )
  );

  return (
    <header className='App-header fixed top-16 left-0 right-0 mx-auto bg-gray-100 flex items-center lg:w-3/5 w-4/5 h-12 rounded-md shadow-lg'>
      {/* Menu */}
      <ul
        className={`flex flex-col sm:flex-row items-center absolute sm:static left-0 sm:h-12 h-[50vh] w-full transition-all duration-300 ease-out sm:bg-inherit bg-gray-200 sm:shadow-none shadow-lg rounded-md ${
          isOpen ? 'top-14' : '-top-[100vh] sm:top-0'
        } `}
      >
        {renderList}
      </ul>
      {/* Menu */}
      <Hamburger isOpen={isOpen} handleOnClick={handleOnClick} />
    </header>
  );
};

export default Navigation;
