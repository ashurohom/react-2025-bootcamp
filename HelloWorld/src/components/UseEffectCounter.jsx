import { useState, useEffect } from 'react';

function AutoCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1); // Increase every second
    }, 1000);

    return () => clearInterval(interval); // Clean up when unmounted
  }, []); // Empty array = run once on mount

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default AutoCounter