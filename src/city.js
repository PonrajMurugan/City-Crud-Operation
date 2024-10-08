import React, { useState } from 'react';
import './city.css'; 

const City = () => {
  const [city, setCity] = useState('');
  const [cityList, setCityList] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();

    if (trimmedCity === '') {
      setError('City name cannot be empty');
      return;
    }

    if (cityList.includes(trimmedCity)) {
      setError('City already added');
      return;
    }

    setCityList([...cityList, trimmedCity]);
    setCity('');
    setError('');

  };

  return (

    <div className="city-list-container">
      <h1 className="heading">City Lists</h1>
      <form onSubmit={handleFormSubmit} className="form">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          className="input-field"
        />
        <button type="submit" className="submit-btn">Add City</button>
      </form>

      {error && <p className="error-msg">{error}</p>}

      <ul className="city-list">
        {cityList.map((cityItem, index) => (
          <li key={index} className="city-item">{cityItem}</li>
        ))}
      </ul>
    </div>
    
  );
};

export default City;
