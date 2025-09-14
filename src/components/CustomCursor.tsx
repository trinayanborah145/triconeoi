import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const cursorSize = 40; // Comfortable size for a cursor

  useEffect(() => {
    if (!cursorRef.current) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.body.style.cursor = 'none';
    
    // Show cursor immediately
    if (cursorRef.current) {
      cursorRef.current.style.opacity = '1';
    }
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        border: '2px solid white',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.1s ease',
      }}
    />
  );
};

export default CustomCursor;
