import React, { useState } from 'react';

interface HeartProps {
  heartColor?: string;
  isClicked?: boolean;
  size?: number;
}

const Heart: React.FC<HeartProps> = ({ heartColor = 'red', isClicked = false, size = 24 }) => {
  const [liked, setLiked] = useState(isClicked);
  const [animateHeart, setAnimateHeart] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setAnimateHeart(true);
    setTimeout(() => {
      setAnimateHeart(false);
    }, 300);
  };

  return (
    <div className='flex justify-between items-center mt-4'>
      <button
        className={`flex justify-center items-center w-12 h-12 rounded-full bg-transparent cursor-pointer transition-transform duration-300 hover:scale-110 ${
          liked ? 'scale-105' : ''
        }`}
        onClick={handleLike}
        style={{ '--heart-color': heartColor } as React.CSSProperties}
      >
        <div className='relative'>
          <svg
            className={`transition-all duration-300 ${
              animateHeart ? 'animate-heart' : ''
            }`}
            width={size}
            height={size}
            viewBox='0 0 24 24'
          >
            <path
              d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
              fill={liked ? heartColor : 'none'}
              stroke={heartColor}
              strokeWidth='2'
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Heart;
