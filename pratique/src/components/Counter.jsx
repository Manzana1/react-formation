import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';
import Button from './Button';
import '../styles/Counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className='fonctions'>
      <CounterDisplay count={count} />
      <Button onClick={handleIncrement} text="Increment" />
      <Button onClick={handleDecrement} text="Decrement" />
    </div>
  );
}


export default Counter