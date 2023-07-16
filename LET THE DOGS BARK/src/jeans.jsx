import React, { useState } from 'react';
import './jeans.css';

const mockProducts = [
  { id: 1, name: 'Alpha Pack', price: 50, drop: 'Doggers Drop', photo: './src/assets/16hmgoepprod (2).jpg', color: 'Red', discontinued: '2023-06-01' },
  { id: 2, name: 'K9-Casuals', price: 75, drop: 'Doggers Drop', photo: './src/assets/15hmgoepprod (2).jpg', color: 'Blue', discontinued: '2023-06-10' },
  { id: 3, name: 'Pooch Pockets', price: 30, drop: 'Ruff Riders Drop', photo: './src/assets/20hmgoepprod (2).jpg', color: 'Green', discontinued: '2023-06-20' },
];

const sizes = ["XS", "S", "M", "L", "XL"];

const Product = ({ product, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, size: selectedSize });
    } else {
      alert('Please select a size.');
    }
  };

  return (
    <div className="product-card">
      <img src={product.photo} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: {product.price}$ – Colour: {product.color}</p>
      <p>Discontinue Date: {product.discontinued}</p>
      <div className="sizes">
        {sizes.map((size, index) => (
          <div className="size" key={index}>
            <input
              type="radio"
              id={`${product.id}_${size}`}
              name={`size_${product.id}`}
              value={size}
              checked={selectedSize === size}
              onChange={handleSizeChange}
            />
            <label htmlFor={`${product.id}_${size}`}>{size}</label>
          </div>
        ))}
      </div>
      <button className="myBabyButton" onClick={handleAddToCart}>
        ADD TO CART
      </button>
    </div>
  );
};

const Filter = ({ categories, sleeveTypes, colors, handleFilterChange, handleSleeveChange, handleColorChange, handlePriceChange }) => (
  <div className="filter">
    <h2>Filter</h2>
    <h3>Drop</h3>
    {categories.map((drop, index) => (
      <div key={index}>
        <input type="checkbox" id={drop} onChange={() => handleFilterChange(drop)} />
        <label htmlFor={drop}>{drop}</label>
      </div>
    ))}
    <h3>Color</h3>
    {colors.map((color, index) => (
      <div key={index}>
        <input type="checkbox" id={color} onChange={() => handleColorChange(color)} />
        <label htmlFor={color}>{color}</label>
      </div>
    ))}
    <h3>Price</h3>
    <input type="number" id="minPrice" onChange={handlePriceChange} placeholder="Min Price" />
    <input type="number" id="maxPrice" onChange={handlePriceChange} placeholder="Max Price" />
  </div>
);

const ProductList = ({ addToCart }) => {
  const [filters, setFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const uniqueCategories = Array.from(new Set(mockProducts.map(product => product.drop)));
  const uniqueColors = Array.from(new Set(mockProducts.map(product => product.color)));

  const handleFilterChange = (drop) => {
    if (filters.includes(drop)) {
      setFilters(filters.filter(cat => cat !== drop));
    } else {
      setFilters([...filters, drop]);
    }
  };

  const handleColorChange = (color) => {
    if (colorFilters.includes(color)) {
      setColorFilters(colorFilters.filter(clr => clr !== color));
    } else {
      setColorFilters([...colorFilters, color]);
    }
  };

  const handlePriceChange = (event) => {
    if (event.target.id === "minPrice") {
      setMinPrice(event.target.value);
    } else if (event.target.id === "maxPrice") {
      setMaxPrice(event.target.value);
    }
  };

  let filteredProducts = filters.length ? mockProducts.filter(product => filters.includes(product.drop)) : mockProducts;
  filteredProducts = colorFilters.length ? filteredProducts.filter(product => colorFilters.includes(product.color)) : filteredProducts;
  filteredProducts = minPrice ? filteredProducts.filter(product => product.price >= minPrice) : filteredProducts;
  filteredProducts = maxPrice ? filteredProducts.filter(product => product.price <= maxPrice) : filteredProducts;

  return (
    <div className="productList">
      <Filter 
        categories={uniqueCategories} 
        colors={uniqueColors} 
        handleFilterChange={handleFilterChange} 
        handleColorChange={handleColorChange} 
        handlePriceChange={handlePriceChange}
      />
      <div className="products">
        {filteredProducts.map(product => (
          <Product product={product} key={product.id} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

const Jeans = ({ onAddToCart }) => (
  <div>
    <h2>Our Products</h2>
    <ProductList addToCart={onAddToCart} />
  </div>
);

export default Jeans;
