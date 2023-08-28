// src/main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Calculator() {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const calculateResult = () => {
    try {
      // Using eval() for simplicity in this example, but not recommended for production.
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const clearExpression = () => {
    setExpression('');
  };

  return (
    <>
      <div>
        <h2 className="heading-style">React Calculator</h2>
      </div>
      <div className="calculator">
        <div className="display">{expression}</div>
        <div className="buttons">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button className="clear" onClick={clearExpression}>
            C
          </button>
          <button className="equal" onClick={calculateResult}>
            =
          </button>
          <button className="operation" onClick={() => handleButtonClick('/')}>
            /
          </button>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<Calculator />, document.getElementById('app'));
