import React, { useEffect, useRef, useState } from 'react';
import './AnimatedText.css';

interface AnimatedTextProps {
  onComplete: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const totalLetters = 'TRICONE'.length;
  const animationDuration = 1; // seconds
  const delayBetweenLetters = 0.1; // seconds
  const totalAnimationTime = (totalLetters - 1) * delayBetweenLetters + animationDuration;
  
  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll('.letter');
      letters.forEach((letter, index) => {
        (letter as HTMLElement).style.animation = `reveal ${animationDuration}s forwards ${index * delayBetweenLetters}s`;
      });

      // Set timeout to trigger completion after all animations are done
      const timer = setTimeout(() => {
        setAnimationComplete(true);
        onComplete();
      }, totalAnimationTime * 1000 + 500); // Add small buffer

      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  if (animationComplete) {
    return null;
  }

  return (
    <div className={`fullscreen-center ${animationComplete ? 'fade-out' : ''}`}>
      <div ref={textRef} className="animated-text">
        {'TRICONE'.split('').map((letter, index) => (
          <span 
            key={index} 
            className="letter"
            style={{
              animationDelay: `${index * delayBetweenLetters}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;