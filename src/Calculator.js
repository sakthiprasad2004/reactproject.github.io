import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const result = new Function(`return ${input}`)();
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>
            {item}
          </button>
        ))}
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
