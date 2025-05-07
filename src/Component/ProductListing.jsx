import React, { useState, useEffect } from 'react';
import Header from './Header';

const ProductListing = () => {
  const filterTitles = [
    'IDEAL FOR',
    'OCCASION',
    'WORK',
    'FABRIC',
    'SUITABLE FOR',
    'RAW MATERIALS',
    'PATTERN',
  ];

  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [openFilters, setOpenFilters] = useState(() =>
    filterTitles.reduce((acc, title) => {
      acc[title] = false;
      return acc;
    }, {})
  );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const toggleFilterSection = (title) => {
    setOpenFilters((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="font-sans">
      <Header />

      <section className="text-center py-10 px-4">
        <h1 className="text-3xl font-semibold mb-2">DISCOVER OUR PRODUCTS</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />
          scelerisque. Dolar integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>

      <div className="flex justify-between items-center px-8 py-4 bg-gray-100 text-sm">
        <div><strong>{products.length} ITEMS</strong></div>
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

      <div className="flex px-8 py-6">
        {isFilterVisible && (
          <aside className="w-1/5 pr-6 space-y-6 text-sm text-gray-700">
            <label>
              <input type="checkbox" className="mr-2 mb-6" />
              <strong>CUSTOMIZABLE</strong>
            </label>

            {filterTitles.map((title) => (
              <div key={title} className="border-t pt-2">
                <div
                  className="font-semibold cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFilterSection(title)}
                >
                  {title}
                  <span className="text-xs">{openFilters[title] ? '▴' : '▾'}</span>
                </div>

                {openFilters[title] && (
                  <div className="ml-2 mt-2 text-gray-700 space-y-1 text-sm">
                    <div className="font-medium text-black">All</div>
                    <div className="text-gray-400 text-xs cursor-pointer underline">
                      Unselect all
                    </div>
                    <label className="block text-gray-600">
                      <input type="checkbox" className="mr-2" /> Men
                    </label>
                    <label className="block text-gray-600">
                      <input type="checkbox" className="mr-2" /> Women
                    </label>
                    <label className="block text-gray-600">
                      <input type="checkbox" className="mr-2" /> Baby & Kids
                    </label>
                  </div>
                )}
              </div>
            ))}
          </aside>
        )}

        <section className={`w-full grid gap-6 ${isFilterVisible ? 'grid-cols-3' : 'grid-cols-4'}`}>
          {products.map((product) => (
            <div key={product.id} className="border p-4 text-center text-sm">
              <img
                src={product.image}
                alt={product.title}
                className="mb-2 mx-auto h-40 object-contain"
              />
              <p className="text-gray-700 font-medium">{product.title}</p>
              <p className="text-gray-500">${product.price}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductListing;
