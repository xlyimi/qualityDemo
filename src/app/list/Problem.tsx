import React, { useState, useEffect } from 'react';

function ProblematicComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will cause a memory leak!');
    }, 1000);

    // Forgot to return a cleanup function
  }, []); // The empty dependency array means this effect runs only once, but the timer will never be cleared.

  const handleClick = () => {
    setCount(count + 1);
    // Unnecessary use of state for something that could be memoized
    const doubleCount = count * 2;
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      {/* Missing aria-label for accessibility */}
      <img src="https://example.com/image.jpg" alt="" />
    </div>
  );
}

export default ProblematicComponent;