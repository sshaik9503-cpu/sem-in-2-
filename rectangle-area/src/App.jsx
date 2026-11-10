import React, { useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    if (length === '' || width === '') {
      alert('Please enter length and width');
      return;
    }

    const result = Number(length) * Number(width);
    setArea(result);
  };

  return (
    <div className="container">
      <h1>Area of Rectangle Calculator</h1>

      <label>Enter Length:</label>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        placeholder="Enter length"
      />

      <label>Enter Width:</label>
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        placeholder="Enter width"
      />

      <button onClick={calculateArea}>
        Calculate Area
      </button>

      {area !== null && (
        <h2>Area of Rectangle: {area}</h2>
      )}
    </div>
  );
}

export default App;