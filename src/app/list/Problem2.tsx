import React, { useState, useEffect, useRef } from 'react';

interface ComplexProblematicComponentProps {
  initialText: string;
}

function ComplexProblematicComponent({ initialText }: ComplexProblematicComponentProps) {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>(initialText);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      // This will be called on every resize, potentially causing performance issues
      console.log('Resize event fired');
    };

    window.addEventListener('resize', handleResize);

    // Missing cleanup function, causing a memory leak
  }, [text]); // The text dependency will cause this effect to run on every update

  useEffect(() => {
    // Creating a new timer on every render
    timerRef.current = window.setTimeout(() => {
      setCount((c) => c + 1);
    }, 1000);

    // Missing cleanup function, causing another memory leak
  }, []);

  const handleClick = () => {
    setText('updated text'); // This will trigger a re-render and potentially cause the above effects to run
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Update Text</button>
      <img src={text as string} alt="Dynamic image" /> {/* Potentially unsafe if `text` can be controlled by the user */}
      <div>
        {Array.from({ length: 10000 }, (_, k) => k).map((key) => (
          // Creating a large number of elements can cause performance issues
          <div key={key.toString()}>{key}</div>
        ))}
      </div>
    </div>
  );
}

export default ComplexProblematicComponent;