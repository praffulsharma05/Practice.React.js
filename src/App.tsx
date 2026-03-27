import React, { useState, useEffect } from 'react';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < 10) {
      const timer = setTimeout(() => {
        setNumbers(prev => [...prev, (currentIndex + 1) * 2]);
        setCurrentIndex(prev => prev + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div>
      <h2>2's Table:</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>2 × {index + 1} = {num}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;