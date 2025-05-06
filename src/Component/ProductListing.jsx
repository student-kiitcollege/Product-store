import React, { useState } from 'react';
import { CiSearch, CiHeart, CiUser } from 'react-icons/ci';
import { BsBagDash } from 'react-icons/bs';
import { IoLogoElectron, IoLogoSlack } from 'react-icons/io5';

const ProductListing = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [openFilters, setOpenFilters] = useState({});

  const toggleFilterSection = (title) => {
    setOpenFilters((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const filterTitles = [
    'IDEAL FOR',
    'OCCASION',
    'WORK',
    'FABRIC',
    'SUITABLE FOR',
    'RAW MATERIALS',
    'PATTERN',
  ];

  return (
    <div className="font-sans">
      {/* Top bar */}
      <nav className="bg-black text-red-800 flex justify-evenly text-sm py-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <IoLogoSlack />
            <p>Lorem ipsum dolor</p>
          </div>
        ))}
      </nav>

      {/* Main Navbar */}
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

      {/* Header */}
      <section className="text-center py-10 px-4">
        <h1 className="text-3xl font-semibold mb-2">DISCOVER OUR PRODUCTS</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />
          scelerisque. Dolar integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>

      {/* Controls */}
      <div className="flex justify-between items-center px-8 py-4 bg-gray-100 text-sm">
        <div><strong>3425 ITEMS</strong></div>
        <div
          className="text-gray-500 cursor-pointer underline pr-190"
          onClick={() => setIsFilterVisible(!isFilterVisible)}
        >
          {isFilterVisible ? '< HIDE FILTER' : '> SHOW FILTER'}
        </div>
        <select className="font-semibold border border-gray-300 px-2 py-1 text-sm">
          <option>RECOMMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE : HIGH TO LOW</option>
          <option>PRICE : LOW TO HIGH</option>
        </select>
      </div>

      {/* Main Content */}
      <div className="flex px-8 py-6">
        {/* Filters */}
        {isFilterVisible && (
          <aside className="w-1/5 pr-6 space-y-6 text-sm text-gray-700">
            <div>
              <label>
                <input type="checkbox" className="mr-2" />
                <strong>CUSTOMIZABLE</strong>
              </label>
            </div>

            {filterTitles.map((title) => (
              <div key={title}>
                <div
                  className="font-semibold cursor-pointer flex justify-between items-center border-t pt-2"
                  onClick={() => toggleFilterSection(title)}
                >
                  {title}
                  <span className="text-xs">{openFilters[title] ? '▴' : '▾'}</span>
                </div>
                <div className="mt-1 text-gray-500">All</div>
                {openFilters[title] && (
                  <div className="ml-2 mt-2 space-y-1">
                    <label className="block">
                      <input type="checkbox" className="mr-2" /> Men
                    </label>
                    <label className="block">
                      <input type="checkbox" className="mr-2" /> Women
                    </label>
                    <label className="block">
                      <input type="checkbox" className="mr-2" /> Baby
                    </label>
                  </div>
                )}
              </div>
            ))}
          </aside>
        )}

        {/* Product Grid */}
        <section className={`w-full grid gap-6 ${isFilterVisible ? 'grid-cols-3' : 'grid-cols-4'}`}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border p-4 text-center text-sm">
              <img
                src="https://cdn.pixabay.com/photo/2017/09/08/07/59/bag-2728000_640.png"
                alt="product"
                className="mb-2 mx-auto"
              />
              <p className="text-gray-700 font-medium">PRODUCT NAME</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductListing;
