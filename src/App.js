import React, { useState } from 'react';
import './styles.css';

export default function App() {
  const [input, setInput] = useState('');
  const handleInput = () => {
    const arr = input.split('');
    arr.reverse();
    const reverse = Number(arr.join(''));
    return {
      reverse,
      diff: Math.abs(Number(input) - Number(reverse)),
    };
  };

  return (
    <div className='App'>
      <div>
        <div>
          Number:{' '}
          <input
            type='number'
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type='submit'>Submit</button>
        </div>
        <div>{`Result:${handleInput().reverse}`}</div>
        <div>{`Differences:${handleInput().diff}`}</div>
      </div>
    </div>
  );
}
