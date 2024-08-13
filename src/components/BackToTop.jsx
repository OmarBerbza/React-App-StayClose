// src/components/BackToTop.jsx
import React, { useState, useEffect } from 'react';
import { backtotop } from '../assets';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg transition-opacity duration-300 cursor-pointer ${isVisible ? 'opacity-60 hover:opacity-100' : 'opacity-0'}`}
    >
      <img src={backtotop} alt="back to top icon" className="w-[40px] h-[40px]" />
    </button>
  );
};

export default BackToTop;
