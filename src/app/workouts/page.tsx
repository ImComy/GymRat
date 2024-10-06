"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const capitalizeEachSegment = (path: string) => {
  return path
    .split('/')
    .filter(Boolean)
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('/');
};

const Workouts = () => {
  const pathname = usePathname();
  const [pathHistory, setPathHistory] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const formattedPath = pathname === '/' ? 'Home' : `Home/${capitalizeEachSegment(pathname.slice(1))}`;
    setPathHistory((prev) => [...prev, formattedPath]);
    setTimeout(() => setIsVisible(true), 80);
  }, [pathname]);

  const muscleGroups = [
    { label: 'All Body', image: '/maxresdefault.png', href: '/workouts/All' },
    { label: 'CHEST', image: '/maxresdefault.png', href: '/workouts/chest' },
    { label: 'BACK', image: '/maxresdefault.png', href: '/workouts/back' },
    { label: 'DELTS', image: '/maxresdefault.png', href: '/workouts/delts' },
    { label: 'ABS', image: '/maxresdefault.png', href: '/workouts/abs' },
    { label: 'ARMS', image: '/maxresdefault.png', href: '/workouts/arms' },
    { label: 'LEGS', image: '/maxresdefault.png', href: '/workouts/legs' },
  ];

  return (
    <main className="bg-white w-screen min-h-screen relative flex flex-col p-4 md:p-10">
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .invisible {
          opacity: 0;
        }
        .visible {
          opacity: 1;
        }
      `}</style>

      <p className="text-[#515151] text-[18px] md:text-[22px] font-medium font-['Roboto'] leading-relaxed tracking-wide">
        {pathHistory[pathHistory.length - 1]}
      </p>

      <h1 className="text-black font-black font-['Inter'] mb-8 leading-tight text-[28px] sm:text-[40px] md:text-[60px] lg:text-[80px]">
        Choose a muscle group
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {muscleGroups.map((group, index) => (
          <Link key={index} href={group.href}>
            <div className={`${isVisible ? 'fade-in-up' : 'invisible'}`}>
              <button
                className={`w-full max-w-[385px] h-[158.15px] bg-black/75 rounded-2xl flex justify-center items-center gap-2.5 transform transition-all duration-300 hover:scale-110 relative overflow-hidden group mx-auto sm:mx-4`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                  style={{ backgroundImage: `url('${group.image}')` }}
                ></div>
                <div className="relative z-10 text-center text-white text-[40px] sm:text-[60px] lg:text-[80px] font-extrabold font-['Inter'] leading-[1.1] tracking-[2px] sm:tracking-[4px] lg:tracking-[5.5px] group-hover:text-[#ccff00] transition-colors duration-300">
                  {group.label}
                </div>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Workouts;
