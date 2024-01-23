import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');
  const intervalIdRef = useRef(null);

  const handleTyping = () => {
    console.log('Text:', text);

    if (text) {
      let index = 0;
      intervalIdRef.current = setInterval(() => {
        setVisibleText((prevText) => prevText + text[index]);
        index += 1;
        if (index === text.length) {
          clearInterval(intervalIdRef.current);
        }
      }, 100); // Adjust the speed by changing the interval duration
    }
  };

  useEffect(() => {
    handleTyping();

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalIdRef.current);
  }, [text]);

  console.log('Visible Text:', visibleText);

  return <div className="typewriter">{visibleText}</div>;
};


export default TypewriterText;
