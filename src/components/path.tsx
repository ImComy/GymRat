"use client";

import { usePathname, useRouter } from 'next/navigation';

const Path = () => {
  const pathname = usePathname();
  const router = useRouter();
  const segments = pathname.split('/').filter(Boolean);

  const handleClick = (index: number) => {
    const newPath = '/' + segments.slice(0, index + 1).join('/');
    router.push(newPath);
  };

  return (
    <p className="text-[#515151] text-[18px] md:text-[22px] font-medium font-['Roboto'] leading-relaxed tracking-wide">
      {segments.length > 0 && (
        <>
          <span onClick={() => handleClick(-1)} className="cursor-pointer hover:underline">
            Home
          </span>
          {segments.map((segment, index) => (
            <span key={index}>
              {' / '}
              <span
                onClick={() => handleClick(index)}
                className="cursor-pointer hover:underline"
              >
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </span>
            </span>
          ))}
        </>
      )}
    </p>
  );
};

export default Path;
