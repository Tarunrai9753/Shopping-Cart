import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <button className="btn btn-outline-primary" onClick={handleDecrement}>-</button>
      <span className="mx-3">{count}</span>
      <button className="btn btn-outline-primary" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
