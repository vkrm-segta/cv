import React, { useEffect, useState } from 'react';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!text) return; // Check if text is provided

    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[currentIndex]);
      currentIndex += 1;

      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, [text]);

  return <span className="text-gray-800">{displayText}</span>;
};

export default TypewriterText;
