import { useEffect, useState } from 'react';

const useCursorTracking = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    const cursor = document.getElementById('cursor');
      if (cursor) {
      cursor.style.left = `${position.x}px`;
      cursor.style.top = `${position.y}px`;
    }
  }, [position]);

  return position;
};

export default useCursorTracking;
