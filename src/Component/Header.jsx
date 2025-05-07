import React from 'react';
import { CiSearch, CiHeart, CiUser } from 'react-icons/ci';
import { BsBagDash } from 'react-icons/bs';
import { IoLogoElectron, IoLogoSlack } from 'react-icons/io5';

const Header = () => {
  return (
    <div className="font-sans">
      <nav className="bg-black text-red-800 flex justify-evenly text-sm py-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <IoLogoSlack />
            <p>Lorem ipsum dolor</p>
          </div>
        ))}
      </nav>

      <header className="border-b border-gray-200">
        <nav className="flex items-center justify-between px-8 py-4 relative">
          <IoLogoElectron />
          <div className="w-[120px]" />
          <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold">
            LOGO
          </div>
          <div className="flex items-center gap-4 w-[200px] justify-end">
            <CiSearch />
            <CiHeart />
            <BsBagDash />
            <CiUser />
            <select className="border-none bg-transparent text-sm focus:outline-none">
              <option>ENG</option>
              <option>HINDI</option>
              <option>FRENCH</option>
            </select>
          </div>
        </nav>
        <ul className="flex justify-center gap-8 py-3 text-sm font-bold border-t border-gray-100">
          <li>Shop</li>
          <li>Skills</li>
          <li>Stories</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
