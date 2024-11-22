import React, { useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = document.querySelector('.cursor');
      if (cursor) {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
