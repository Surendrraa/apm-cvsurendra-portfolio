import React from 'react';

export const BackgroundSnake: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 3000"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 100 Q 250 50 500 200 T 1000 300 M1000 600 Q 750 700 500 500 T 0 800 M0 1100 Q 250 1200 500 1000 T 1000 1300 M1000 1600 Q 750 1700 500 1500 T 0 1800 M0 2100 Q 250 2200 500 2000 T 1000 2300 M1000 2600 Q 750 2700 500 2500 T 0 2800"
          stroke="url(#snakeGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          className="wire-snake glowing-path"
        />
        
        <defs>
          <linearGradient id="snakeGradient" x1="0" y1="0" x2="0" y2="3000" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B5CF6" />
            <stop offset="0.5" stopColor="#A78BFA" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};