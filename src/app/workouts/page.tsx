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
    setTimeout(() => setIsVisible(true), 80)
  }, [pathname]);

  const muscleGroups = [
    { label: 'LEGS', image: '/maxresdefault.png', href: '/workouts/legs' },
    { label: 'BACK', image: '/maxresdefault.png', href: '/workouts/back' },
    { label: 'ARMS', image: '/maxresdefault.png', href: '/workouts/arms' },
    { label: 'CHEST', image: '/maxresdefault.png', href: '/workouts/chest' },
    { label: 'ABS', image: '/maxresdefault.png', href: '/workouts/abs' },
    { label: 'DELTS', image: '/maxresdefault.png', href: '/workouts/delts' }
  ];

  return (
    <main className="bg-white w-screen min-h-screen relative flex flex-col p-10">
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

      <p className="text-[#515151] text-[22px] font-medium font-['Roboto'] leading-relaxed tracking-wide">
        {pathHistory[pathHistory.length - 1]}
      </p>

      <h1 className="text-black font-black font-['Inter'] mb-8 leading-tight lg:text-[80px] md:text-[60px] sm:text-[40px] text-[30px]">
        Choose a muscle group
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {muscleGroups.map((group, index) => (
          <Link key={index} href={group.href}>
            <div className={`${isVisible ? 'fade-in-up' : 'invisible'}`}>
              <button
                className={`w-[385px] h-[158.15px] bg-black/75 rounded-2xl flex justify-center items-center gap-2.5 inline-flex transform transition-all duration-300 hover:scale-110 relative overflow-hidden group m-4`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                  style={{ backgroundImage: `url('${group.image}')` }}
                ></div>
                <div className="relative z-10 text-center text-white text-[79.88px] font-extrabold font-['Inter'] leading-[71.89px] tracking-[5.59px] group-hover:text-[#ccff00] transition-colors duration-300">
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
