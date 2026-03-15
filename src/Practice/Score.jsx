import { useState, useEffect } from 'react';

export function Score() {
  const [score, setScore] = useState(0);

  useEffect(() => {
  console.log('Subscribed to live scoring for the team');

  const interval = setInterval(() => {
    setScore(prev => prev + 1);
  }, 1000);

//   return () => {
//     console.log('Cleaned up live scoring for the team'); // ✅ runs on unmount
//     clearInterval(interval);
//   };
}, []);

  return <div className= 'text-2xl'>Score: {score}</div>;
}
