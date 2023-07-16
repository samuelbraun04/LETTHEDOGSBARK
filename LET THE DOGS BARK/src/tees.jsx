import React, { useState } from 'react';
import './Tees.css';

const mockProducts = [
  { id: 1, name: 'Barking Basic', description: "White shirt with red and blue vertical stripes.", price: 50, drop: 'Doggers Drop', photo: './src/assets/1hmgoepprod.jpg', sleeve: 'Longsleeve', color: 'White', discontinued: '2023-06-01' },
  { id: 2, name: 'Paw Power', description: "Blue shirt with red and white tropical designs.", price: 75, drop: 'Doggers Drop', photo: './src/assets/2hmgoepprod (2).jpg', sleeve: 'Shortsleeve', color: 'Blue', discontinued: '2023-06-10' },
  { id: 3, name: 'K9 Couture', description: "Simple black shirt with one button.", price: 30, drop: 'Ruff Riders Drop', photo: './src/assets/3 hmgoepprod (2).jpg', sleeve: 'Longsleeve', color: 'Black', discontinued: '2023-06-20' },
  { id: 4, name: 'Tail-Wagger', description: "Simple brown shirt two buttons holding the middle together.", price: 100, drop: 'Husking Drop', photo: './src/assets/4hmgoepprod (2).jpg', sleeve: 'Shortsleeve', color: 'Brown', discontinued: '2023-06-15' },
  { id: 5, name: 'Canine Comfort', description: "Pink shirt with the words St. Mortiz on the front in large characters.", price: 50, drop: 'Doggers Drop', photo: './src/assets/5hmgoepprod (2).jpg', sleeve: 'Longsleeve', color: 'Pink', discontinued: '2023-06-01' },
  { id: 6, name: 'Alpha Dog', description: "White shirt with a small red flower on the left side of the chest.", price: 75, drop: 'Doggers Drop', photo: './src/assets/6hmgoepprod (2).jpg', sleeve: 'Shortsleeve', color: 'White', discontinued: '2023-06-10' },
  { id: 7, name: 'Hound\'s Tooth', description: "Dark blue shirt with yellow text on the left side of the chest saying Cascade Range Mountain Rescue Department.", price: 30, drop: 'Ruff Riders Drop', photo: './src/assets/7hmgoepprod (2).jpg', sleeve: 'Longsleeve', color: 'Blue', discontinued: '2023-06-20' },
  { id: 8, name: 'Puppy Love', description: "Light green shirt with white flowers and yellow text on top of the flowers saying Wake Up and Smell The Flowers.", price: 100, drop: 'Husking Drop', photo: './src/assets/8hmgoepprod (2).jpg', sleeve: 'Shortsleeve', color: 'Green', discontinued: '2023-06-15' },
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
      <img src={product.photo} alt={product.description} />
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
    <h3>Sleeve Type</h3>
    {sleeveTypes.map((sleeve, index) => (
      <div key={index}>
        <input type="checkbox" id={sleeve} onChange={() => handleSleeveChange(sleeve)} />
        <label htmlFor={sleeve}>{sleeve}</label>
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
  const [sleeveFilters, setSleeveFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const uniqueCategories = Array.from(new Set(mockProducts.map(product => product.drop)));
  const uniqueSleeveTypes = Array.from(new Set(mockProducts.map(product => product.sleeve)));
  const uniqueColors = Array.from(new Set(mockProducts.map(product => product.color)));

  const handleFilterChange = (drop) => {
    if (filters.includes(drop)) {
      setFilters(filters.filter(cat => cat !== drop));
    } else {
      setFilters([...filters, drop]);
    }
  };

  const handleSleeveChange = (sleeve) => {
    if (sleeveFilters.includes(sleeve)) {
      setSleeveFilters(sleeveFilters.filter(slv => slv !== sleeve));
    } else {
      setSleeveFilters([...sleeveFilters, sleeve]);
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
  filteredProducts = sleeveFilters.length ? filteredProducts.filter(product => sleeveFilters.includes(product.sleeve)) : filteredProducts;
  filteredProducts = colorFilters.length ? filteredProducts.filter(product => colorFilters.includes(product.color)) : filteredProducts;
  filteredProducts = minPrice ? filteredProducts.filter(product => product.price >= minPrice) : filteredProducts;
  filteredProducts = maxPrice ? filteredProducts.filter(product => product.price <= maxPrice) : filteredProducts;

  return (
    <div className="productList">
      <Filter 
        categories={uniqueCategories} 
        sleeveTypes={uniqueSleeveTypes} 
        colors={uniqueColors} 
        handleFilterChange={handleFilterChange} 
        handleSleeveChange={handleSleeveChange} 
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

const Tees = ({ onAddToCart }) => (
  <div>
    <h2>Our Products</h2>
    <ProductList addToCart={onAddToCart} />
  </div>
);

export default Tees;
